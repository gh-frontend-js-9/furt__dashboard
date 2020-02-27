import React from 'react';
import './App.css'
import './index.css';
import {BrowserRouter, Route} from "react-router-dom";
import LoginPostContainer from "./pages/auth-redux/containers/LoginPostContainer";
import SignUpContainer from "./pages/auth-redux/containers/SignUpContainer";
import ResetPassContainer from "./pages/auth-redux/containers/ResetPassContainer";


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path='/login' component={LoginPostContainer}/>
            <Route exact path='/' component={SignUpContainer}/>
            <Route path='/reset_password' component={ResetPassContainer}/>
            {/*<Route path='/projects/' component={ProjectsList}/>*/}
        </BrowserRouter>
   )};

export default App;

