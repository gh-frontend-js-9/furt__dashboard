import {GET_ALL_MESSAGES_SUCCESS} from "../../constants/messagesConst";

export function getAllMessagesResponse(allMessages) {
    return {
        type: GET_ALL_MESSAGES_SUCCESS,
        allMessages
    };
}