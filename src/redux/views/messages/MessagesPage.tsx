import React from 'react';
import GetAllThreadsContainer from "../../containers/messages/GetAllThreadsContainer";
import GetAllMessagesContainer from "../../containers/messages/GetAllMessagesContainer";
import GetUserByIdContainer from "../../containers/messages/GetUserByIdContainer";

const MessagesPage: React.FC = () => {
    return (
        <>
            <div className='messages-container'>
                <div className='messages-container__threads'>
                    <GetAllThreadsContainer/>
                </div>

                <div className=' messages-container__messages'>
                    <GetAllMessagesContainer/>
                </div>

                <div className='messages-container__user-info'>
                    <GetUserByIdContainer/>

                </div>
            </div>

        </>
    )
};

export default MessagesPage
