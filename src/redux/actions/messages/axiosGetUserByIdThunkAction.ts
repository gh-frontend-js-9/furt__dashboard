import axios from "axios";
import '../../services/axiosConfig'
import {logout, authenticated, authenticationError, isLoading} from "../authActions";
import { getUserByIdResponse} from "./responseSuccessActions";

export function axiosGetUserBId(url) {
    return (dispatch) => {
        dispatch(isLoading(true));

        axios.get(url)
            .then((response) => {
                if (response.statusText !== 'OK') {
                    dispatch(logout(true));
                    throw Error(response.statusText);
                } else {
                    dispatch(isLoading(false));
                    dispatch(authenticated(true));
                    dispatch(getUserByIdResponse(response.data));
                    console.log(response.data)
                }
            })
            .catch(() =>
                dispatch(authenticationError(true)))
    }
}