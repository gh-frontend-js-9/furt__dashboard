
import axios from "axios";
import {
    logoutAction,
    authenticatedAction,
    authenticationErrorAction,
    isLoadingAction,
    getCurrentUserIdAction
} from "../authActionsCreators";

export function logInAction(url, email, password) {

    return (dispatch) => {
        dispatch(isLoadingAction(true))

        axios.post(url, {email, password})
            .then((response) => {
                let currentUserId = (response.data._id);
                dispatch(getCurrentUserIdAction(currentUserId));
                if (response.statusText !== 'OK') {
                    dispatch(logoutAction(true));
                    throw Error(response.statusText);
                } else {
                    let token = response.headers['x-auth-token'];
                    localStorage.setItem('token', token);
                    dispatch(isLoadingAction(false));
                    dispatch(authenticatedAction(true));
                }
            })
            .catch(() =>
                dispatch(authenticationErrorAction(true)))
    };
}
