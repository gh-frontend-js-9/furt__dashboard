import '../../services/axiosConfig'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../../views/projects/Loading";
import CardCreatUserInfo from "../../views/messages/CardCreateUserInfo";

interface IProps {
    userInfoById?: any,
    authenticationError?: boolean,
    isLoading?: boolean,
    logout?: boolean,
    authenticated?: boolean,
}

class GetUserByIdContainer extends Component <IProps, {}> {

    render() {

        return (
            <>
                {this.props.isLoading ? <Loading/> : <CardCreatUserInfo  userInfo={this.props.userInfoById}/>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        userInfoById: state.userInfoById,
        logout: state.logout,
        isLoading: state.isLoading,
        authenticated: state.authenticated,
        authenticationError: state.authenticationError,
    };
};

export default connect(mapStateToProps, null)(GetUserByIdContainer);