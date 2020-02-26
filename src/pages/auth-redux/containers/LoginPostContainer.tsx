import '../services/axiosConfig'
import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {axiosPostLogIn} from '../actions/axiosLogInThunkActions';
import {Button} from "../views/Button";
import {EmailInput} from "../views/EmailInput";
import {PasswordInput} from "../views/PasswordInput";
import {NavLink} from "react-router-dom";
import LoginGetRequestContainer from "./LoginContainer";

interface IState {
    email?: string,
    password?: string,
}

interface IProps {
    email?: string,
    password?: string,
    isLoading?: boolean,
    authenticationError?: boolean,
    axiosPostLogIn?: any
}

class LoginPostContainer extends Component <IProps, IState> {
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
        this.props.axiosPostLogIn(`${axios.defaults.baseURL}/api/users/login`, email, password);
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
                                onChange={this.handleChange}
                    />
                    <PasswordInput name="password"
                                   value={password}
                                   onChange={this.handleChange}
                                   type="password"
                    />
                    <Button type="submit">Log In</Button>
                </form>
                <div className='helpers'>
                    <span className='loading'>{this.props.isLoading ? <p>Loading..</p> : null}</span>
                    <span>{this.props.authenticationError ? <p>Invalid email or password, try again</p> : null}</span>
                </div>
                <LoginGetContainer/>
            </div>

        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        isLoading: state.isLoading,
        authenticated: state.authenticated,
        authenticationError: state.authenticationError,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        axiosPostLogIn: (url: string, email: string, password: string) =>
            dispatch(axiosPostLogIn(url, email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPostContainer);


