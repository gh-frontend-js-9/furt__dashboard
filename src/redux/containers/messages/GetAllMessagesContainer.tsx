import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../../views/projects/Loading";
import CardCreatMessages from "../../views/messages/CardCreatMessages";

interface IProps {
    sendMessage?: string,
    allMessages?: any,
    isLoading?: boolean,
}

class GetAllMessagesContainer extends Component <IProps, {}> {

    render() {
        let sendMessage = this.props.sendMessage.length !== 0
            ? <CardCreatMessages {...this.props.sendMessage}/>
            : null;

        let getAllMessage = this.props.allMessages.map((message: any) =>
            <CardCreatMessages {...message} key={message._id}/>);
        return (
            <>
                {this.props.isLoading ? <Loading/> : <> {getAllMessage} {sendMessage} </>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        sendMessage: state.sendMessage,
        allMessages: state.allMessages,
        isLoading: state.isLoading,
    };
};

export default connect(mapStateToProps, null)(GetAllMessagesContainer);