import axios from "axios";
import '../../services/axiosConfig'
import {logout, authenticated, authenticationError, isLoading} from "../authActions";
import {getAllThreadsResponse} from "./responseSuccessActions";

export function axiosGetAllThreads(url) {
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
                    dispatch(getAllThreadsResponse(response.data));
                }
            })
            .catch(() =>
                dispatch(authenticationError(true)))

    }
}
