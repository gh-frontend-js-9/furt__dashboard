import '../../services/axiosConfig'
import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {axiosGetAllThreads} from "../../actions/messages/axiosGetAllThreadsThunkActions";
import CardCreatAllThreads from "../../views/messages/CardCreatAllThreads";
import Loading from "../../views/projects/Loading";

interface IProps {
    axiosGetAllThreads?: any,
    allThreads?: any,
    isLoading?: boolean,
    authenticationError?: boolean,
    logout?: boolean,
    authenticated?: boolean,
}

class GetAllThreadsContainer extends Component <IProps, {}> {
    componentDidMount() {
        this.props.axiosGetAllThreads(`${axios.defaults.baseURL}/api/threads?sort=desc`);
    };

    render() {
        let threads = this.props.allThreads.map((thread: any) =>
            <CardCreatAllThreads {...thread} key={thread._id}/>);
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
        logout: state.logout,
        isLoading: state.isLoading,
        authenticated: state.authenticated,
        authenticationError: state.authenticationError,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        axiosGetAllThreads: (url: string) => dispatch(axiosGetAllThreads(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllThreadsContainer);


