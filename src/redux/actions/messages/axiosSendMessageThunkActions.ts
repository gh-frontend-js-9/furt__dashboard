import axios from "axios";
import { authenticated, authenticationError} from "../authActions";
import {sendMessagesResponse} from "./responseSuccessActions";

export function axiosSendMessages(url, message, threadId) {
    return (dispatch) => {

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
                    dispatch(authenticated(true));
                    dispatch(sendMessagesResponse(response.data));
                }
            })
            .catch(() =>
                dispatch(authenticationError(true)))
    };
}
