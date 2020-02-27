import '../services/axiosConfig'
import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Button} from "../views/Button";
import {EmailInput} from "../views/EmailInput";
import {PasswordInput} from "../views/PasswordInput";
import {NavLink, Redirect} from "react-router-dom";
import {axiosLogInPost} from '../actions/axiosLoginPostThunkActions';
import LogInGetContainer from "./LogInGetContainer";

interface IState {
    email?: string,
    password?: string,
}

interface IProps {
    email?: string,
    password?: string,
    isLoading?: boolean,
    authenticationError?: boolean,
    axiosLogInPost?: any,
    logout?: boolean,
    authenticated?: boolean;
}

class LogInPostContainer extends Component <IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
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
        const {email, password} = this.state;
        event.preventDefault();
        this.props.axiosLogInPost(`${axios.defaults.baseURL}/api/users/login`, email, password);
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
                        {this.props.authenticationError ? <>Invalid email or password, try again</> : null}
                    </p>
                </div>
                <LogInGetContainer/>
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
        axiosLogInPost: (url: string, email: string, password: string) =>
            dispatch(axiosLogInPost(url, email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogInPostContainer);


