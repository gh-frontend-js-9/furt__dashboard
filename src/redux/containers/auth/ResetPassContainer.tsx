import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {Button} from "../../views/common/Button";
import {EmailInput} from "../../views/auth/EmailInput";
import {PasswordInput} from "../../views/auth/PasswordInput";
import {NavLink} from 'react-router-dom';
import {axiosResetPass} from "../../actions/auth/resetPassActions";
import {ConfirmPassInput} from "../../views/auth/ConfirmPassInput";
import {Redirect} from 'react-router-dom';

interface IState {
    email?: string,
    password?: string,
    confirmationPassword?: string
}

interface IProps {
    email?: string,
    password?: string,
    authenticationError?: boolean,
    axiosResetPass?: any,
    logout?: boolean,
    authenticated?: boolean

}

class ResetPassContainer extends Component <IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmationPassword: ""
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
        const {email, password, confirmationPassword} = this.state;
        event.preventDefault();
        this.props.axiosResetPass(`${axios.defaults.baseURL}/api/users/reset_password`, email, password, confirmationPassword);
    };

    render() {
        const {email, password, confirmationPassword} = this.state;
        return (
            <div className="auth-container">
                <h2 className="auth-container__title">
                    Reset password
                </h2>
                <NavLink className='auth-navigation' to='/login'>
                    Log in
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
                    <ConfirmPassInput name="confirmationPassword"
                                      value={confirmationPassword}
                                      onChange={this.handleChange}
                                      type="password"/>
                    <Button type="submit">OK</Button>
                </form>
                <div className='helpers'>
                    {this.props.authenticated ? (<Redirect to='/login'/>) : null}
                    {this.props.authenticationError ? (<p>Invalid fields, try again</p>) : null}
                </div>
            </div>

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
        axiosResetPass: (url: string, email: string, password: string, confirmationPassword: string) =>
            dispatch(axiosResetPass(url, email, password, confirmationPassword))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassContainer);


