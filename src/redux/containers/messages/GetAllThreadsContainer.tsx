import '../../services/axiosConfig'
import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {axiosGetAllThreads} from "../../actions/messages/axiosGetAllThreadsThunkActions";
import Loading from "../../views/projects/Loading";
import {axiosGetAllMessages} from '../../actions/messages/axiosGetAllMessagesThunkAction'

interface IProps {
    allMessages?: any,
    allThreads?: any,
    axiosGetAllThreads?: any,
    axiosGetAllMessages?: any,
    authenticationError?: boolean,
    isLoading?: boolean,
    logout?: boolean,
    authenticated?: boolean,
}

class GetAllThreadsContainer extends Component <IProps, {}> {
    componentDidMount() {
        this.props.axiosGetAllThreads(`${axios.defaults.baseURL}/api/threads`);
    };

    getAllMessages(threadId) {
        this.props.axiosGetAllMessages(`${axios.defaults.baseURL}/api/threads/messages/${threadId}`)
        localStorage.setItem('threadId', threadId);
    }

    render() {
        let threads = this.props.allThreads.map((thread: any) =>
            <div className='threads-card threads-card--hovered'
                 onClick={() => this.getAllMessages(thread._id)}
                 key={thread._id}>
                <div className='threads-card__block'>
                    <div className='threads-card__name'>
                        <i className='threads-card__img fa-user fa-2x fa'> </i>
                        {thread.users.length === 2 && thread.users[0]._id === localStorage.getItem('myId')
                            ? <span>{thread.users[1].name}</span>
                            : <span>{thread.users[0].name}</span>}
                    </div>
                    <div className='threads-card__updated-at'>
                        {thread.updated_at.slice(2, 10)}
                    </div>
                </div>
            </div>);
        return (
            <>
                {this.props.isLoading ? <Loading/> : <>{threads}</>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        allMessages: state.allMessages,
        allThreads: state.allThreads,
        logout: state.logout,
        isLoading: state.isLoading,
        authenticated: state.authenticated,
        authenticationError: state.authenticationError,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        axiosGetAllThreads: (url: string) => dispatch(axiosGetAllThreads(url)),
        axiosGetAllMessages: (url: string) => dispatch(axiosGetAllMessages(url)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllThreadsContainer);