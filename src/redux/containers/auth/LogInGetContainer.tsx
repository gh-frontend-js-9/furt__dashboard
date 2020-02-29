import '../services/axiosConfig'
import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {axiosLogInGet} from '../../actions/auth/axiosLoginGetThunkActions';

interface IProps {
    axiosLogInGet?: any,
}

class LogInGetContainer extends Component <IProps, {}> {
    componentDidMount() {
        this.props.axiosLogInGet(`${axios.defaults.baseURL}/api/users/`);
    };

    render() {
        return (
            <> </>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        logout: state.logout,
        authenticated: state.authenticated,
        authenticationError: state.authenticationError,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        axiosLogInGet: (url: string) => dispatch(axiosLogInGet(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInGetContainer);


