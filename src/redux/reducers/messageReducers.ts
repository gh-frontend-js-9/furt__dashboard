import {
    CREATE_THREAD__SUCCESS,
    GET_ALL_MESSAGES_SUCCESS, GET_ALL_THREADS_SUCCESS, GET_ALL_USERS_SUCCESS, SEND_MESSAGES_SUCCESS,
} from "../constants/messagesConst";
import {GET_USER_BY_ID__SUCCESS} from "../constants/authConst";

export function allThreads(state: any = [], action) {
    switch (action.type) {
        case GET_ALL_THREADS_SUCCESS:
            return action.allThreads;

        default:
            return state;
    }
}

export function allMessages(state:any = [], action) {
    switch (action.type) {
        case GET_ALL_MESSAGES_SUCCESS:
            return  action.allMessages;

        default:
            return state;
    }
}
export function sendMessage(state:any = [], action) {
    switch (action.type) {
        case SEND_MESSAGES_SUCCESS:
            return  action.sendMessage;

        default:
            return state;
    }
}
export function allUsers(state:any = [], action) {
    switch (action.type) {
        case GET_ALL_USERS_SUCCESS:
            return  action.allUsers;

        default:
            return state;
    }
}

export function createThread(state:any = [], action) {
    switch (action.type) {
        case CREATE_THREAD__SUCCESS:
            return  action.createThread;

        default:
            return state;
    }
}

export function userInfoById(state:any = [], action) {
    switch (action.type) {
        case GET_USER_BY_ID__SUCCESS:
            return  action.userInfoById;

        default:
            return state;
    }
}


