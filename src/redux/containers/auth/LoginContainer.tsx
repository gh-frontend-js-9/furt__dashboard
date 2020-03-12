import React, {Component} from 'react'
import axios from 'axios'
import '../../services/axiosConfig'
import {connect} from 'react-redux'
import {Button} from "../../views/common/Button";
import {EmailInput} from "../../views/auth/EmailInput";
import {PasswordInput} from "../../views/auth/PasswordInput";
import {NavLink, Redirect} from "react-router-dom";
import {logInAction} from '../../actions/auth/loginActions';
import { getCurrentUserAction} from "../../actions/auth/getCurrentUserAction";
import store from "../../store/storeConfig";

interface IState {
    email?: string,
    password?: string,
}

interface IProps {
    email?: string,
    password?: string,
    isLoading?: boolean,
    authenticationError?: boolean,
    getCurrentUserAction?: any,
    logInAction?: any,
    logout?: boolean,
    authenticated?: boolean;
}

class LogInContainer extends Component <IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getCurrentUserAction(`${axios.defaults.baseURL}/api/users/`);
        console.log(store.getState().currentUserId);
    };

    handleChange(event: any) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event: any) {
        const {email, password} = this.state;
        event.preventDefault();
        this.props.logInAction(`${axios.defaults.baseURL}/api/users/login`, email, password);
    };

    render() {
        const {email, password} = this.state;
        return (
            <div className="auth-container">
                <h2 className="auth-container__title">
                    Log in
                </h2>
                <NavLink className='auth-navigation' to='/'>
                    Not a member?
                </NavLink>
                <form className="form"
                      name="form"
                      onSubmit={this.handleSubmit}>
                    <EmailInput name="email"
                                type="email"
                                value={email}
                                onChange={this.handleChange}/>
                    <PasswordInput name="password"
                                   value={password}
                                   onChange={this.handleChange}
                                   type="password"/>
                    <Button type="submit">Log In</Button>
                </form>
                <NavLink className='auth-navigation' to='reset_password'>
                    Forgot password?
                </NavLink>
                <div className='helpers'>
                    <p className='loading'>
                        {this.props.isLoading ? <>Loading...</> : null}
                    </p>
                    <p>
                        {this.props.authenticated ? (<Redirect to='/threads'/>) : null}
                        {this.props.authenticationError ? <>Invalid email or password, try again</> : null}
                    </p>
                </div>
            </div>

        );
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
        getCurrentUserAction: (url: string) => dispatch(getCurrentUserAction(url)),
        logInAction: (url: string, email: string, password: string) =>
            dispatch(logInAction(url, email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInContainer);


