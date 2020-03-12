import React from 'react';
import {Navigation} from './Navigation';
import GetAllProjectsContainer from "../../containers/projects/GetAllProjectsContainer";

const ProjectsList: React.FC = () => {
    return (
        <>
            <Navigation/>
            <GetAllProjectsContainer/>
        </>
    )
};

export default ProjectsList
