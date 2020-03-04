import React from 'react';
import SendMessagesContainer from "../../containers/messages/SendMessagesContainer";
import GetAllUsersContainer from "../../containers/messages/GetAllUsersContainer";
import {ModalWindowNewConvers} from './ModalWindowNewConvers'

export const Footer = ()=>{
    return(
        <footer className='footer-container'>
            <div className='new-conversation'>
                <ModalWindowNewConvers>
                    <GetAllUsersContainer/>
                </ModalWindowNewConvers>
                {/*<SendMessagesContainer/>*/}
            </div>
        </footer>
    )
}