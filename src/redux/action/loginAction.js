import React from 'react'
import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../actionTypes'
import { loginApi } from '../api/formApi';

export const LoginData = (data) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_USER_REQUEST,
        });

        const response = await loginApi(data)
        console.log(response.data)
        if(response.status === 200){
            console.log('hello')
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: {
                    result: response.data,
                },
            });
            
        localStorage.setItem("x-access-token", response.data.token);
        }
            else {
                dispatch({
                    type: LOGIN_USER_FAILURE,
                    payload: {
                        error: 'failed to get data'
                    }
                });
            }

            }
    catch (error) {
        if (error.response.status === 401){
            dispatch({
                type: LOGIN_USER_FAILURE,
                payload: {
                    error: 'username or password is incorrect',
                }
            });
        }
        else {
            dispatch({
                type: LOGIN_USER_FAILURE,
                payload: {
                    error: 'something went wrong! Try again',
                }
            });
        }   
}


}