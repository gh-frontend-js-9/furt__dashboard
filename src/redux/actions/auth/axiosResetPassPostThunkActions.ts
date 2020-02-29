import axios from "axios";
import {logout, authenticated, authenticationError} from "../authActions";

export function axiosResetPass(url, email, password, confirmationPassword) {
    return (dispatch) => {

        axios.post(url, {email, password, confirmationPassword})
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
    };
}
