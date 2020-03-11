import axios from "axios";
import '../../services/axiosConfig'
import {
    logoutAction,
    authenticatedAction,
    authenticationErrorAction,
    getCurrentUserIdAction
} from "../authActionsCreators";

export function getCurrentUserAction(url) {
    return (dispatch) => {

        if (localStorage.getItem('token')) {
            axios.get(url)
                .then((response) => {
                    let currentUserId = (response.data._id);

                    dispatch(getCurrentUserIdAction(currentUserId));
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
