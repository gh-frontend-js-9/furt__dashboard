import React from "react"

const CardCreatedAllThreads= (props: any) => {
    return (
        <div className='threads-card threads-card--hovered' key={props._id}>
            <div className='threads-card__block'>
                <div className='threads-card__name'>
                    <i className= 'threads-card__img fa-user fa-2x fa'> </i>
                    <span>{props.users[0].name}</span>
                </div>
                <div className='threads-card__updated-at'>
                    {props.updated_at.slice(2, 10)}
                </div>
            </div>
            <div className='threads-container__message'>
                {props.message === null ? null : props.message.body}
            </div>
        </div>
    );
};

export default CardCreatedAllThreads