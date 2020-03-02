import {combineReducers} from 'redux';
import {logout, authenticated, authenticationError, isLoading} from "./authReducers";
import {allProjects} from "./projectsReducers";
import {allMessages, allThreads} from "./messageReducers";

const rootReducers = combineReducers({
    logout,
    authenticated,
    authenticationError,
    isLoading,
    allProjects,
    allThreads,
    allMessages
});
export default rootReducers;