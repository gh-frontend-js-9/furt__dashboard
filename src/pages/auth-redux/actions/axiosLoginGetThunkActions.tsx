import axios from "axios";
import {logout, authenticated, authenticationError} from "./authActions";

export function axiosLogInGet(url) {
        return (dispatch) => {
            localStorage.getItem('token');
            if (localStorage.getItem('token')) {
            axios.get(url)
                .then((response) => {
                    console.log(response);
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
