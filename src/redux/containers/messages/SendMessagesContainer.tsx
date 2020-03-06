import React, {Component} from 'react'
import '../../services/axiosConfig'
import axios from 'axios'
import {connect} from 'react-redux'
import {Button} from "../../views/common/Button";
import {axiosSendMessages} from "../../actions/messages/axiosSendMessageThunkActions";

interface IState {
    message?: any,
}

interface IProps {
    sendMessage?: string,
    axiosSendMessages?: any,
}

class SendMessagesContainer extends Component <IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        const {value} = event.target;
        this.setState({
            message: value
        })
    }

    handleSubmit(event: any) {
        event.preventDefault();

        const {message} = this.state;
        this.props.axiosSendMessages(`${axios.defaults.baseURL}/api/threads/messages`, message);
        this.setState({
            message: ''
        })
    };

    render() {
        const {message} = this.state;
        return (
            <div className="form-send-mess-container">
                <form className="send-message__form"
                      name='message__form'
                      onSubmit={this.handleSubmit}>
                    <textarea className='send-message__textarea'
                              name="textarea"
                              placeholder='Write a message'
                              value={message}
                              onChange={this.handleChange}> </textarea>
                    <Button disabled={!message} type="submit">
                        Send
                    </Button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        sendMessage: state.sendMessage,
        // authenticated: state.authenticated
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        axiosSendMessages: (url: string, message: string) => dispatch(axiosSendMessages(url, message)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SendMessagesContainer);


