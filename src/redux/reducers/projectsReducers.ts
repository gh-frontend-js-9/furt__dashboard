import {GET_ALL_PROJECTS_SUCCESS} from "../constants/projectsConst";


export function allProjects(state:any = [], action) {
    switch (action.type) {
        case GET_ALL_PROJECTS_SUCCESS:
            return  action.allProjects;

        default:
            return state;
    }
}

