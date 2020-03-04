import axios from "axios";
import '../../services/axiosConfig'
import {logout, authenticated, authenticationError, isLoading} from "../authActions";
import {getAllUsersResponse} from "./responseSuccessActions";

export function axiosGetAllUsers(url) {
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
                    dispatch(getAllUsersResponse(response.data));
                }
            })
            .catch(() =>
                dispatch(authenticationError(true)))
    }
}