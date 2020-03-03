import React from 'react';
import SendMessagesContainer from "../../containers/messages/SendMessagesContainer";

export const Footer = (props)=>{
    return(
        <footer className='footer-container'>
            <div className='new-conversation'>
                <button className='new-conversation__button new-conversation__button--hovered' > + New conversation</button>
            </div>
        </footer>
    )
}