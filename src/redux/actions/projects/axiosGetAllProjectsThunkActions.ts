import axios from "axios";
import '../../services/axiosConfig'
import {logout, authenticated, authenticationError, isLoading} from "../authActions";
import {getAllProjectsResponse} from "../../actions/projects/getAllProjectsResponseAction";


export function axiosGetAllProjects(url) {
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
                        let allProjects = response.data
                        console.log(getAllProjectsResponse(allProjects));
                        dispatch(getAllProjectsResponse(allProjects))
                    }
                })
                .catch(() =>
                    dispatch(authenticationError(true)))

    }
}
