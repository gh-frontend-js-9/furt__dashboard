import React from 'react';
import '../../App.css';
import {Navigation} from './components/Navigation';
import {Header} from "../common/Header";
import {Sidebar} from "../common/Sidebar";
import {SortRow} from "./components/Sort";
import ProjectContainer from './ProjectContainer';

const ProjectsList: React.FC = () => {
    return (
        <>
            <Header/>
            <div className='main'>
                <Sidebar/>
                <div className='main__container'>
                    <SortRow/>
                    <Navigation/>
                    <ProjectContainer/>
                </div>
            </div>
        </>
    )
};

export default ProjectsList
