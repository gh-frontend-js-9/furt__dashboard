import axios from "axios";
import '../../services/axiosConfig'
import {logout, authenticated, authenticationError, isLoading} from "../authActions";
import {getAllMessagesResponse} from "./getAllMessagesResponseAction";

export function axiosGetAllMessages(url) {
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
                    dispatch(getAllMessagesResponse(response.data));
                    console.log(response.data)
                }
            })
            .catch(() =>
                dispatch(authenticationError(true)))

    }
}
