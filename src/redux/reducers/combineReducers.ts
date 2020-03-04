import {combineReducers} from 'redux';
import {logout, authenticated, authenticationError, isLoading} from "./authReducers";
import {allProjects} from "./projectsReducers";
import {allMessages, allThreads, allUsers, message} from "./messageReducers";

const rootReducers = combineReducers({
    logout,
    authenticated,
    authenticationError,
    isLoading,
    allProjects,
    allThreads,
    allMessages,
    message,
    allUsers
});
export default rootReducers;