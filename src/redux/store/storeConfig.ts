import {createStore, applyMiddleware} from 'redux'
import rootReducers from '../../common/combineReducers/combineReducers'
import thunk from "redux-thunk";

const store = createStore(
    rootReducers,
    applyMiddleware(thunk)
);

export default store;