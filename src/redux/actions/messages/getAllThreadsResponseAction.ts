import {GET_ALL_THREADS_SUCCESS} from "../../constants/messagesConst";

export function getAllThreadsResponse(allThreads) {
    return {
        type: GET_ALL_THREADS_SUCCESS,
        allThreads
    };
}