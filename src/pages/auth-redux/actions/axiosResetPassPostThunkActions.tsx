import axios from "axios";
import {logout, authenticated, authenticationError, isLoading} from "./authActions";

export function axiosResetPass(url, email, password, confirmPass) {
    return (dispatch) => {
        dispatch(isLoading(true));

        axios.post(url, {email, password, confirmPass})
            .then((response) => {
                console.log(response);
                if (response.statusText !== 'OK') {
                    dispatch(logout(true));
                    throw Error(response.statusText);
                } else {
                    dispatch(isLoading(false));
                    dispatch(authenticated(true));
                }
            })
            .catch(() =>
                dispatch(authenticationError(true)))
    };
}
