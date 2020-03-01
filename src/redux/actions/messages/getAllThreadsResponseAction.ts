import {GET_ALL_PROJECTS_SUCCESS} from "../../constants/projectsConst";

export function getAllThreadsResponse(allThreads) {
    return {
        type: GET_ALL_PROJECTS_SUCCESS,
        allThreads
    };
}