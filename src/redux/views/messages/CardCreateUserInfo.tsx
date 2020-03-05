import React from "react"

const CardCreatUserInfo = (props: any) => {
    return (
        <div className='card-user-info'>
            <i className='card-user-info__photo fa fa-user-secret fa-4x'> </i>
            <span className='card-user-info__title'>{props.userInfo.name}</span>
            <span className='card-user-info__title'>{props.userInfo.position}</span>
            <span className='card-user-info__description'>{props.userInfo.description}</span>

            <span className='card-user-info__email'>{props.userInfo.email}</span>
            <span className='card-user-info__title'>Email</span>

            <span className='card-user-info__phone'>{props.userInfo.phone}</span>
            <span className='card-user-info__title'>Phone</span>

            <span className='card-user-info__address'>{props.userInfo.address}</span>
            <span className='card-user-info__title'>Address</span>

            <span className='card-user-info__organization'>{props.userInfo.organization}</span>
            <span className='card-user-info__title'>Organization</span>
        </div>
    );
};

export default CardCreatUserInfo