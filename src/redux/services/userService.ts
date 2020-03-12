import axios from "axios";
import {Component} from "react";
import './axiosConfig'
interface IProps {
    currentUserUrl?: any
}

export class UserService extends Component  <IProps, {}> {
    static get appUrl(){
        return axios.defaults.baseURL;
    }
    static get loginUrl() {
        return '/api/users/login'
    }
    static get currentUserUrl() {
        return '/api/users/'
    }

    static login(email, password) {
       return  axios.post(  this.appUrl + this.loginUrl, {email, password})
    }

    static currentUser() {
        return  axios.get(this.appUrl + this.currentUserUrl)
    }
}