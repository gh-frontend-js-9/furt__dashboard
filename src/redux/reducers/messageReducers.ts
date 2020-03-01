import {GET_ALL_THREADS_SUCCESS} from "../constants/messagesConst";

export function allThreads(state: any = [], action) {
    switch (action.type) {
        case GET_ALL_THREADS_SUCCESS:
            return action.allThreads;

        default:
            return state;
    }
}

