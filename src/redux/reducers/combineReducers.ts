import {combineReducers} from 'redux';
import {logout, authenticated, authenticationError, isLoading} from "./authReducers";
import {allProjects} from "./projectsReducers";
import {allMessages, allThreads, allUsers, createThread, sendMessage} from "./messageReducers";

const rootReducers = combineReducers({
    logout,
    authenticated,
    authenticationError,
    isLoading,
    allProjects,
    allThreads,
    allMessages,
    sendMessage,
    allUsers,
    createThread
});
export default rootReducers;