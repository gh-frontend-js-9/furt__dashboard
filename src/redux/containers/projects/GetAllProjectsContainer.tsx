import '../services/axiosConfig'
import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {axiosGetAllProjects} from "../actions/axiosGetAllProjectsThunkActions";
import CardCreatedProject from '../../views/projects/CardCreatedProject'

interface IState {
    allProject?: any,
}

interface IProps {
    axiosGetAllProjects?: any,
    allProject?: any,
    isLoading?: boolean,
    authenticationError?: boolean,
    axiosLogInPost?: any,
    logout?: boolean,
    authenticated?: boolean;
}

class GetAllProjectsContainer extends Component <IProps, IState> {
    componentDidMount() {
        this.props.axiosGetAllProjects(`${axios.defaults.baseURL}/api/projects/`);
    };

    render()  {
        const project = this.state.allProject.map((project: any) =>
            <CardCreatedProject {...project} key={project._id}/>);
        return (
            <>
                {this.props.isLoading ? <>Loading...</> : project}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
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


