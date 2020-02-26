import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import store from "./pages/auth-redux/store/storeConfig";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
