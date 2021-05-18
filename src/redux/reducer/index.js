import { combineReducers } from 'redux';
import loginUserReducer from './loginUser'
import complaintReducer from './complaintReducer'

export default combineReducers({
    loginUserReducer,
    complaintReducer
})

