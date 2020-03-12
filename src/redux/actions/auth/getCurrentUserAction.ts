import '../../services/axiosConfig'
import {
    authenticatedAction,
    authenticationErrorAction,
    getCurrentUserIdAction, isLoadingAction
} from "../authActionsCreators";
import {UserService} from "../../services/userService";

export function getCurrentUserAction() {
    return (dispatch) => {

        if (localStorage.getItem('token')) {
            UserService.currentUser()
                .then((response) => {
                    let currentUserId = (response.data._id);
                    console.log(currentUserId)
                    console.log(response)
                    dispatch(getCurrentUserIdAction(currentUserId));

                    let token = response.headers['x-auth-token'];
                    localStorage.setItem('token', token);
                    dispatch(isLoadingAction(false));
                    dispatch(authenticatedAction(true));
                })
                .catch(error =>
                    dispatch(authenticationErrorAction(error.response)))
        }
    }
}
