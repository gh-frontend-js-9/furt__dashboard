import axios from "axios";
import {logoutAction, authenticatedAction, authenticationErrorAction, isLoadingAction} from "../authActionsCreators";
import { getAllMessagesReceiveAction} from "./messagesActionCreators";

export function axiosGetAllMessages(url) {
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
                    dispatch(getAllMessagesReceiveAction(response.data));
                }
            })
            .catch(() =>
                dispatch(authenticationErrorAction(true)))

    }
}
