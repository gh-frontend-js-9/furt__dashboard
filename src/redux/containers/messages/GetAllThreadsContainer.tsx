import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllThreadsAction} from "../../actions/messages/getAllThreadsActions";
import Loading from "../../views/projects/Loading";
import {getAllMessagesAction} from '../../actions/messages/getAllMessagesAction'
import {getThreadIdAction} from "../../actions/messages/messagesActionCreators";
import {getUserByIdAction} from "../../actions/messages/getUserByIdAction";
import store from "../../store/storeConfig";
import {getCurrentUserAction} from "../../actions/auth/getCurrentUserAction";

interface IProps {
    allThreads?: any,
    getUserByIdAction?: any,
    getAllThreadsAction?: any,
    getAllMessagesAction?: any,
    getCurrentUserAction?: any,
    isLoading?: boolean,
    getThreadIdAction?: any
}

class GetAllThreadsContainer extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getAllThreadsAction();
         this.props.getCurrentUserAction();
    };

    getAllMessages(threadId, firstUserId, secondUserId) {
        this.props.getAllMessagesAction(threadId);
        this.props.getThreadIdAction(threadId);

        firstUserId === store.getState().currentUserId
            ? this.props.getUserByIdAction(secondUserId)
            : this.props.getUserByIdAction(firstUserId)
    }

    render() {
        let currentUserId = store.getState().currentUserId;

        let threads = this.props.allThreads.map((thread: any) =>
            <div className='threads-card threads-card--hovered'
                 onClick={() => this.getAllMessages(thread._id, thread.users[0]._id, thread.users[1]._id)}
                 key={thread._id}>
                <div className='threads-card__block'>
                    <div className='threads-card__name'>
                        <i className='threads-card__img fa fa-user-secret fa-2x'> </i>
                        {thread.users.length === 2 && thread.users[0]._id === currentUserId
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
        allThreads: state.allThreads,
        isLoading: state.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
         getCurrentUserAction: () => dispatch(getCurrentUserAction()),
        getAllThreadsAction: () => dispatch(getAllThreadsAction()),
        getAllMessagesAction: (threadId: string) => dispatch(getAllMessagesAction(threadId)),
        getUserByIdAction: (userById: string) => dispatch(getUserByIdAction(userById)),
        getThreadIdAction: (threadId: string) => dispatch(getThreadIdAction(threadId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllThreadsContainer);