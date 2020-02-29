import {GET_ALL_PROJECTS_SUCCESS} from "../constants/projectsConst";

const initialState = {
    allProjects: []
};
export function allProjects(state:any = initialState, action) {
    console.log( action.allProjects)
    switch (action.type) {
        case GET_ALL_PROJECTS_SUCCESS:
            return  action.allProjects;

        default:
            return state;
    }

}

