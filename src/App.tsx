import React from 'react';
import './App.css'
import './index.css';

import {BrowserRouter, Route} from "react-router-dom";
import LoginPostContainer from "./redux/containers/auth/LoginContainer";
import SignUpContainer from "./redux/containers/auth/SignUpContainer";
import ResetPassContainer from "./redux/containers/auth/ResetPassContainer";
import ApplicationComponent from "./redux/views/common/ApplicationComponent";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path='/login' component={LoginPostContainer}/>
            <Route exact path='/' component={SignUpContainer}/>
            <Route path='/reset_password' component={ResetPassContainer}/>

            <Route path='/threads' component={ApplicationComponent}/>
        </BrowserRouter>
   )};

export default App;

