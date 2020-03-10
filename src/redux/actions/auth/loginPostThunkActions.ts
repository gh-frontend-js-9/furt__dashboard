import axios from "axios";
import {logoutAction, authenticatedAction, authenticationErrorAction, isLoadingAction} from "../authActionsCreators";

export function axiosLogInPost(url, email, password) {
    return (dispatch) => {
        dispatch(isLoadingAction(true));

        axios.post(url, {email, password})
            .then((response) => {
                let myId = (response.data._id);
                localStorage.setItem('myId', myId);

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
