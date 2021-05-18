import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from '../actionTypes'
import { loginApi } from '../api/formApi';

export const LoginData = (data) => async (dispatch) => {
    try {
        dispatch({
            type: LOGIN_USER_REQUEST,
        });

        const response = await loginApi(data)
        console.log(response.data.token)
        if (response.status === 200) {
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: {
                    result: response.data,
                },
            });
            localStorage.setItem("x-access-token", response.data.token);
            const userInfo = JSON.stringify({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
            });
            localStorage.setItem("userInfo", userInfo);
            console.log(userInfo)
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
    catch {
        dispatch({
            type: LOGIN_USER_FAILURE,
            payload: {
                error: 'username or password is incorrect',
            }
        });
    }
}


