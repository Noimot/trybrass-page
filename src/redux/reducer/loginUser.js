import { LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from '../actionTypes'

const initialStates = {
    loading: false,
    data: [],
    loginSuccess: false,
    loginError: false,
    errorMessage: ''
};

const loginUserReducer = (state = initialStates, { type, payload }) => {
    switch (type) {
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                loading: true,
                loginError: false
            };
        
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                loginSuccess: true,
                loginError: false
            };
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                loading: false,
                loginError: true,
                errorMessage: payload.error
            }
        default:
            return state
    }
}

export default loginUserReducer;
