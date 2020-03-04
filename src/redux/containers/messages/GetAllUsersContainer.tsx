import '../../services/axiosConfig'
import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import Loading from "../../views/projects/Loading";
import {axiosGetAllUsers} from "../../actions/messages/axiosGetAllUsersThunkAction";
import {axiosCreateThread} from "../../actions/messages/axiosCreateThreadThunkAction";

interface IProps {
    allUsers?: any,
    createThread?: any,
    axiosGetAllUsers?: any,
    axiosCreateThread?: any,
    authenticationError?: boolean,
    isLoading?: boolean,
    logout?: boolean,
    authenticated?: boolean,
}

class GetAllUsersContainer extends Component <IProps, {}> {
    componentDidMount() {
        this.props.axiosGetAllUsers(`${axios.defaults.baseURL}/api/users/all`)
    }

    createThread(userId) {
        this.props.axiosCreateThread(`${axios.defaults.baseURL}/api/threads`, userId)
    }

    render() {
        let user = this.props.allUsers.map((user: any) =>
            <div className='user-card user-card--hovered'
                 onClick={() => this.createThread(user._id)}
                 key={user._id}>
                <div className='user-card__block'>
                    <span className='user-card__name'>{user.name}</span>
                    <p>{user.position}</p>
                </div>
                <div className='user-card__phone'>
                    <p>{user.phone}</p>
                </div>
            </div>);
        return (
            <>
                {this.props.isLoading ? <Loading/> : <>{user}</>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        allUsers: state.allUsers,
        createThread: state.createThread,
        logout: state.logout,
        isLoading: state.isLoading,
        authenticated: state.authenticated,
        authenticationError: state.authenticationError,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        axiosGetAllUsers: (url: string) => dispatch(axiosGetAllUsers(url)),
        axiosCreateThread: (url: string, userId: string) => dispatch(axiosCreateThread(url, userId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllUsersContainer);