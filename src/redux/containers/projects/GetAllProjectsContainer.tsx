import '../../services/axiosConfig'
import React, {Component} from 'react'
import '../../../assets/styles/messages/messages.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {axiosGetAllProjects} from "../../actions/projects/axiosGetAllProjectsThunkActions";
import Loading from "../../views/projects/Loading";
import CardCreatedProject from "../../views/projects/CardCreatedProject";

interface IProps {
    axiosGetAllProjects?: any,
    allProjects?: any,
    isLoading?: boolean,
    authenticationError?: boolean,
    logout?: boolean,
    authenticated?: boolean,
}

class GetAllProjectsContainer extends Component <IProps, {}> {
    componentDidMount() {
        this.props.axiosGetAllProjects(`${axios.defaults.baseURL}/api/projects/`);

    };

    render() {
        let project = this.props.allProjects.map((project:any) =>
            <CardCreatedProject{...project} key={project._id}/>);

        return (
            <>
                {this.props.isLoading ? <Loading/> : <>{project}</>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        allProjects: state.allProjects,
        logout: state.logout,
        isLoading: state.isLoading,
        authenticated: state.authenticated,
        authenticationError: state.authenticationError,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        axiosGetAllProjects: (url: string) => dispatch(axiosGetAllProjects(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GetAllProjectsContainer);


