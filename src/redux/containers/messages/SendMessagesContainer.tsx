import React, {Component} from 'react'
import '../../services/axiosConfig'
import axios from 'axios'
import {connect} from 'react-redux'
import {Button} from "../../views/common/Button";
import {axiosSendMessages} from "../../actions/messages/axiosSendMessageThunkActions";

interface IState {
    message?: string,
}

interface IProps {
    message?: string,
    axiosSendMessages?: any,
    authenticationError?: boolean,
    authenticated?: boolean;
}

class SendMessagesContainer extends Component <IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event: any) {
        const {message} = this.state;
        event.preventDefault();
        this.props.axiosSendMessages(`${axios.defaults.baseURL}/api/threads/messages`, message);
    };

    render() {
        const {message} = this.state;
        return (
            <div className="form-container">
                <form className="send-message__form"
                      name='message__form'
                      onSubmit={this.handleSubmit}
                      method='POST'>

                    <textarea className='send-message__textarea'
                              name="input"
                              placeholder='Write a message'
                              value={message}
                              onChange={this.handleChange}/>
                    <Button type="submit"> Send </Button>
                </form>
            </div>

        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        authenticationError: state.authenticationError,
        authenticated: state.authenticated
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        axiosSendMessages: (url: string, message: string) =>
            dispatch(axiosSendMessages(url, message))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SendMessagesContainer);


