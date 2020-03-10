import axios from "axios";
import {authenticatedAction, authenticationErrorAction} from "../authActionsCreators";
import {sendMessagesReceiveAction} from "./messagesActionCreators";

export function axiosSendMessages(url, message) {
    return (dispatch) => {

        let threadId = localStorage.getItem('threadId');
        axios.post(url, {
            "thread": {
                "_id": threadId
            },
            "message": {
                "body": message
            }
        })
            .then((response) => {
                console.log(response);
                if (response.statusText !== 'OK') {
                    throw Error(response.statusText);
                } else {
                    dispatch(authenticatedAction(true));
                    dispatch(sendMessagesReceiveAction( response.data));
                }
            })
            .catch(() =>
                dispatch(authenticationErrorAction(true)))
    };
}
