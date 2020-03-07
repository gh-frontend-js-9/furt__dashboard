import axios from "axios";
import {logout, authenticated, authenticationError, isLoading} from "../authActions";
import '../../services/axiosConfig'
export function axiosSignUpPost(url, name, email, password) {
    return (dispatch) => {
        dispatch(isLoading(true));

        axios.post(url, {name, email, password})
            .then((response) => {
                if (response.statusText !== 'Created') {
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
