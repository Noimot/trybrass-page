import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import reducer from '../reducer'

// combineReducers is replaced with reducer


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;
