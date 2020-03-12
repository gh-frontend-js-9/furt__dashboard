import {
    authenticatedAction,
    authenticationErrorAction,
    isLoadingAction,
    getCurrentUserIdAction
} from "../authActionsCreators";
import {UserService} from "../../services/userService";
import '../../services/axiosConfig'

export function logInAction(email, password) {

    return (dispatch) => {
        dispatch(isLoadingAction(true))

        UserService.login(email, password)
            .then((response) => {
                let currentUserId = (response.data._id);
                dispatch(getCurrentUserIdAction(currentUserId));

                let token = response.headers['x-auth-token'];
                localStorage.setItem('token', token);
                dispatch(isLoadingAction(false));
                dispatch(authenticatedAction(true));

            })
            .catch(error =>
                dispatch(authenticationErrorAction(error.response)))
    };
}
