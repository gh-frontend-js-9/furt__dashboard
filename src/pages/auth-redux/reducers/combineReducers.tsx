import {combineReducers} from 'redux';
import {logout, authenticated, authenticationError, isLoading} from "./authReducers";

const rootReducers = combineReducers({
    logout,
    authenticated,
    authenticationError,
    isLoading
});
export default rootReducers;