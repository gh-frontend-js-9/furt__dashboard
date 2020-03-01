import React from 'react';
import {Navigation} from './Navigation';
import {Header} from "../common/Header";
import {Sidebar} from "../common/Sidebar";
import {SortRow} from "./Sort";
import GetAllProjectsContainer from "../../containers/projects/GetAllProjectsContainer";
import GetAllThreadsContainer from "../../containers/messages/GetAllThreadsContainer";

const ProjectsList: React.FC = () => {
    return (
        <>
            <Header/>
            <div className='main'>
                <Sidebar/>
                <div className='main__container'>
                    <SortRow/>
                    <Navigation/>
                    <GetAllProjectsContainer/>
                    <GetAllThreadsContainer/>
                </div>
            </div>
        </>
    )
};

export default ProjectsList
