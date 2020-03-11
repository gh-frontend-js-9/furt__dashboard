import axios from "axios";
import {
    logoutAction,
    authenticatedAction,
    authenticationErrorAction,
    isLoadingAction,
} from "../authActionsCreators";
import { getAllThreadsReceiveAction} from "./messagesActionCreators";

export function getAllThreadsAction(url) {
    return (dispatch) => {
        dispatch(isLoadingAction(true));

        axios.get(url)
            .then((response) => {
                if (response.statusText !== 'OK') {
                    dispatch(logoutAction(true));
                    throw Error(response.statusText);
                } else {
                    dispatch(isLoadingAction(false));
                    dispatch(authenticatedAction(true));
                    dispatch(getAllThreadsReceiveAction(response.data));
                }
            })
            .catch(() =>
                dispatch(authenticationErrorAction(true)))
    }
}

