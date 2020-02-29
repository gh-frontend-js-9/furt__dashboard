import '../../services/axiosConfig'
import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {axiosGetAllProjects} from "../../actions/projects/axiosGetAllProjectsThunkActions";
import CardCreatedProjectComponent from '../../views/projects/CardCreatedProject'
import Loading from "../../views/projects/Loading";

interface IProps {
    axiosGetAllProjects?: any,
    allProjects?: any,
    isLoading?: boolean,
    authenticationError?: boolean,
    logout?: boolean,
    authenticated?: boolean,
    title?: object,
    company?: object,
    cost?: object,
    status?: object,
    deadline?: object,
    progress?: object,
    name?: object,
    position?: object,
    assigned?: object,
}

class GetAllProjectsContainer extends Component <IProps, {}> {
    componentDidMount() {
        this.props.axiosGetAllProjects(`${axios.defaults.baseURL}/api/projects/`);
    };

    render() {
        return (
            <>
                {this.props.isLoading ? <Loading/> : null}
                {this.props.allProjects.lenght > 0 ?
                    this.props.allProjects.map((project: any) =>
                        <CardCreatedProjectComponent {...project} key={project._id}/>) :
                    null
                }
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


