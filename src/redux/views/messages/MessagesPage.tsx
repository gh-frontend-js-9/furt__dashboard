import React from 'react';
import {Header} from "../common/Header";
import {Sidebar} from "../common/Sidebar";
import {SortRow} from "../projects/Sort";
import GetAllThreadsContainer from "../../containers/messages/GetAllThreadsContainer";
import {Footer} from "./Footer";
import GetAllMessagesContainer from "../../containers/messages/GetAllMessagesContainer";

const MessagesPage: React.FC = () => {
    return (
        <>
            <Header/>
            <div className='main'>
                <Sidebar/>
                <div className='main__container'>
                    <SortRow/>
                    <div className='messages-container'>

                        <div className='messages-container__threads'>
                            <GetAllThreadsContainer/>
                        </div>
                        <div className=' messages-container__messages'>
                            <GetAllMessagesContainer/>
                        </div>
                    </div>
                    <div className='messages-container__user-info'>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
};

export default MessagesPage
