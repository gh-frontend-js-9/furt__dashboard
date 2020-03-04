import axios from "axios";
import { authenticated, authenticationError} from "../authActions";
import {createThreadResponse} from "./responseSuccessActions";

export function axiosCreateThread(url, userId) {
    return (dispatch) => {

        axios.post(url, {
            "user": {
                "_id": userId
            }
        })
            .then((response) => {
                if (response.statusText !== 'OK') {
                    throw Error(response.statusText);
                } else {
                    dispatch(authenticated(true));
                    dispatch(createThreadResponse(response.data));
                }
            })
            .catch(() =>
                dispatch(authenticationError(true)))
    };
}
