import '../services/axiosConfig'
import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {axiosSignUpPost} from '../../actions/auth/axiosSignUpPostThunkActions';
import {Button} from "../../views/common/Button";
import {EmailInput} from "../../views/auth/EmailInput";
import {PasswordInput} from "../../views/auth/PasswordInput";
import {NameInput} from "../../views/auth/NameInput";
import {NavLink, Redirect} from "react-router-dom";

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
    authenticated?: boolean,
    axiosSignUpPost?: any,
    logout?: boolean
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
        this.props.axiosSignUpPost(`${axios.defaults.baseURL}/api/users/`, name, email, password);
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
                    <span className='loading'>
                        {this.props.isLoading ? <p>Loading...</p> : null}
                    </span>
                    {this.props.authenticated ? (<Redirect to='/login'/>) : null}
                    {this.props.authenticationError ? <p>Invalid fields, try again</p> : null}
                </div>
            </div>

        );
    }
}


const mapStateToProps = (state: any) => {
    return {
        logout:state.logout,
        isLoading: state.isLoading,
        authenticated: state.authenticated,
        authenticationError: state.authenticationError,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        axiosSignUpPost: (url: string, name: string, email: string, password: string) =>
            dispatch(axiosSignUpPost(url, name, email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);


