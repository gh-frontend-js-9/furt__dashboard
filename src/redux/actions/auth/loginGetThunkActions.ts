import axios from "axios";
import {logoutAction, authenticatedAction, authenticationErrorAction} from "../authActionsCreators";

export function getCurrentUserAction(url) {
    return (dispatch) => {

        if (localStorage.getItem('token')) {
            axios.get(url)
                .then((response) => {
                    let myId = (response.data._id);
                    localStorage.setItem('myId', myId);
                    if (response.statusText !== 'OK') {
                        dispatch(logoutAction(true));
                        throw Error(response.statusText);
                    } else {
                        dispatch(authenticatedAction(true));
                    }
                })
                .catch(() =>
                    dispatch(authenticationErrorAction(true)))
        }
    }
}
