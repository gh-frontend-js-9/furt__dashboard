import '../../services/axiosConfig'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../../views/projects/Loading";
import {axiosGetAllMessages} from "../../actions/messages/axiosGetAllMessagesThunkAction";
import CardCreatMessages from "../../views/messages/CardCreatMessages";

interface IProps {
    axiosGetAllMessages?: any,
    allMessages?: any,
    isLoading?: boolean,
    authenticationError?: boolean,
    logout?: boolean,
    authenticated?: boolean,
}

class GetAllMessagesContainer extends Component <IProps, {}> {
    render() {
        let message = this.props.allMessages.map((message: any) =>
            <CardCreatMessages {...message} key={message._id}/>);
        return (
            <>
                {this.props.isLoading ? <Loading/> : <>{message}</>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        allMessages: state.allMessages,
        logout: state.logout,
        isLoading: state.isLoading,
        authenticated: state.authenticated,
        authenticationError: state.authenticationError,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        axiosGetAllMessages: (url: string) => dispatch(axiosGetAllMessages(url)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllMessagesContainer);