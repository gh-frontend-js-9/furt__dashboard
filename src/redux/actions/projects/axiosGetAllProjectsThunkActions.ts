import axios from "axios";
import {logout, authenticated, authenticationError, isLoading} from "../authActions";

export function axiosGetAllProjects(url) {
    return (dispatch) => {
        dispatch(isLoading(true));

            axios.get(url)
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

    }
}
