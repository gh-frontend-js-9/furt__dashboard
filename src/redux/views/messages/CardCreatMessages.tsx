import React from "react"

const CardCreatMessages = (props: any) => {
    return (
        <div className='messages-card' key={props._id}>
            <div className='messages-card__block'>
                <span className='messages-card__message'>{props.body}</span>
                <span className='messages-card__time'>{props.created_at.slice(0, 10)}</span>
            </div>
            <div className='messages-card__photo'>
                <i className='fa fa-user-secret fa-2x'> </i>
            </div>
        </div>
    );
};

export default CardCreatMessages