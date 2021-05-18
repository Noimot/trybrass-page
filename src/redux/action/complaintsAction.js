import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from '../actionTypes'
import { complaintsApi } from '../api/complaintsApi'

const complaintAction = () => async (dispatch) => {
    try {
        dispatch({
            type: GET_USER_REQUEST,
        });
        const response = await complaintsApi()
        if (response.status === 200) {
            dispatch({
                type: GET_USER_SUCCESS,
                payload: {
                    result: response.data.data
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
    catch {
        dispatch({
            type: GET_USER_FAILURE,
            payload: {
                error: "something went wrong"
            }
        })
    }
}

export default complaintAction;


