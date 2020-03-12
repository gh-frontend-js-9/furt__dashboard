import {
    authenticatedAction,
    authenticationErrorAction,
    isLoadingAction,
} from "../authActionsCreators";
import {getAllThreadsReceiveAction} from "./messagesActionCreators";
import {MessagesService} from "../../services/userSevice";

export function getAllThreadsAction() {
    return (dispatch) => {
        dispatch(isLoadingAction(true));

        MessagesService.getAllThreads()
            .then((response: any) => {
                dispatch(isLoadingAction(false));
                dispatch(authenticatedAction(true));
                dispatch(getAllThreadsReceiveAction(response.data));
            })
            .catch(() =>
                dispatch(authenticationErrorAction(true)))
    }
}


