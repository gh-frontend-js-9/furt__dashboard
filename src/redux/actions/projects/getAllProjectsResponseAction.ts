import {GET_ALL_PROJECTS_SUCCESS} from "../../constants/projectsConst";

export function getAllProjectsResponse(allProjects) {
    return {
        type: GET_ALL_PROJECTS_SUCCESS,
        allProjects
    };
}