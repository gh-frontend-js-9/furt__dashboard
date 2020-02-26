import {createStore, applyMiddleware} from 'redux'
import {rootReducers} from '../reducers/combineReducers'
import thunk from "redux-thunk";

export default function storeConfig() {
    return createStore(
        rootReducers,
        applyMiddleware(thunk)
    )
}