import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from '../actionTypes'
import { stories } from '../api/storiesApi'

const getStoriesAction = () => async () => {
    try {
        dispatch({
            type: GET_USER_REQUEST,
        });
        const response = await stories()
        if (response.status === 200) {
            dispatch({
                type: GET_USER_SUCCESS,
                payload: {
                    result: response.data
                }
            });
        } else {
            dispatch({
                type: GET_USER_FAILURE,
                payload: {
                    error: "failure to get data"
                }

            });
        }

    }
    catch (error) {
        if (error.message.status === 400) {
            dispatch({
                type: GET_USER_FAILURE,
                payload: {
                    error: "password or username is incorrect"
                }
            })
        }
        else {
            dispatch({
                type: GET_USER_FAILURE,
                payload: {
                    error: "something went wrong..try again"
                }
            })
        }

    }

}
