import '../services/axiosConfig'
import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {axiosPostSignUp} from '../actions/axiosSignUpThunkActions';
import {Button} from "../views/Button";
import {EmailInput} from "../views/EmailInput";
import {PasswordInput} from "../views/PasswordInput";
import {NameInput} from "../views/NameInput";
import {NavLink} from "react-router-dom";

interface IState {
    name?: string,
    email?: string,
    password?: string,
}

interface IProps {
    name?: string,
    email?: string,
    password?: string,
    isLoading?: boolean,
    authenticationError?: boolean,
    axiosPostSignUp?: any
}

class SignUpContainer extends Component <IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
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
        const {name, email, password} = this.state;
        event.preventDefault();
        this.props.axiosPostSignUp(`${axios.defaults.baseURL}/api/users/`, name, email, password);
    };

    render() {
        const {name, email, password} = this.state;
        return (
            <div className="auth-container">
                <h2 className="auth-container__title">
                    Sign Up
                </h2>
                <NavLink className='auth-navigation' to='/login'>
                    Log in
                </NavLink>
                <form className="form"
                      name="form"
                      onSubmit={this.handleSubmit}>
                    <NameInput name="name"
                               type="text"
                               value={name}
                               onChange={this.handleChange}/>
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
                    <Button type="submit">Sign up</Button>
                </form>
                <div className='helpers'>
                    <span className='loading'>{this.props.isLoading ? <p>LoadingвЂ¦</p> : null}</span>
                    <span>{this.props.authenticationError ? <p>Invalid fields, try again</p> : null}</span>
                </div>
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
        axiosPostSignUp: (url: string, name: string, email: string, password: string) =>
            dispatch(axiosPostSignUp(url, name, email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);


