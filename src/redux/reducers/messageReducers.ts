import {GET_ALL_MESSAGES_SUCCESS, GET_ALL_THREADS_SUCCESS} from "../constants/messagesConst";

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


