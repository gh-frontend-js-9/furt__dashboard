import axios from "axios";
import {logout, authenticated, authenticationError} from "../authActions";

export function axiosLogInGet(url) {
    return (dispatch) => {

        if (localStorage.getItem('token')) {
            axios.get(url)
                .then((response) => {
                    let myId = (response.data._id);
                    localStorage.setItem('myId', myId);
                    if (response.statusText !== 'OK') {
                        dispatch(logout(true));
                        throw Error(response.statusText);
                    } else {
                        dispatch(authenticated(true));
                    }
                })
                .catch(() =>
                    dispatch(authenticationError(true)))
        }
    }
}
