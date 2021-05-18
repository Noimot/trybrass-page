import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from '../actionTypes'

const initialState = {
    loading: false,
    loginError: false,
    errorMessage: '',
    loginSuccess: false,
    getComplaints: []
}

const complaintReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                loginError: false,
                loginSuccess: true,
                getComplaints: payload.result
            }
        case GET_USER_FAILURE:
            return {
                ...state,
                loading: false,
                loginError: true,
                errorMessage: payload.error
            }
        default:
            return state;
    }
}

export default complaintReducer;