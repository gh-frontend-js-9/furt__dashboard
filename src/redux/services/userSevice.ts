import axios from "axios";
import {Component} from "react";

interface IProps {
    getAllThreads?: any
}

export class MessagesService extends Component  <IProps, {}> {
    static get threadsUrl() {
        return '/api/threads'
    }

    static getAllThreads() {
        return axios.get(axios.defaults.baseURL + this.threadsUrl);
    }
}
