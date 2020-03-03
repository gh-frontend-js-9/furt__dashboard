import {
    GET_ALL_MESSAGES_SUCCESS,
    GET_ALL_THREADS_SUCCESS,
    SEND_MESSAGES_SUCCESS, SET_THREAD_ID,
} from "../../constants/messagesConst";

export function getAllThreadsResponse(allThreads) {
    return {
        type: GET_ALL_THREADS_SUCCESS,
        allThreads
    };
}
export function getAllMessagesResponse(allMessages) {
    return {
        type: GET_ALL_MESSAGES_SUCCESS,
        allMessages
    };
}

export function sendMessagesResponse(message) {
    return {
        type: SEND_MESSAGES_SUCCESS,
        message
    };
}
