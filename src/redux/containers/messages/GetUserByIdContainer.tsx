import '../../services/axiosConfig'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../../views/projects/Loading";

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
                {this.props.isLoading ? <Loading/> : <><div> {this.props.userInfoById.name} </div></>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        userInfoById:state.userInfoById,
        logout: state.logout,
        isLoading: state.isLoading,
        authenticated: state.authenticated,
        authenticationError: state.authenticationError,
    };
};

export default connect(mapStateToProps, null)(GetUserByIdContainer);