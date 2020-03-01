import React from 'react';
import {Header} from "../common/Header";
import {Sidebar} from "../common/Sidebar";
import {SortRow} from "../projects/Sort";
import GetAllThreadsContainer from "../../containers/messages/GetAllThreadsContainer";

const MessagesPage: React.FC = () => {
    return (
        <>
            <Header/>
            <div className='main'>
                <Sidebar/>
                <div className='main__container'>
                    <SortRow/>
                    <div className='threads-container'>
                    <GetAllThreadsContainer/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MessagesPage
