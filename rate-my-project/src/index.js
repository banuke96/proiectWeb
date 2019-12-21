import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import LoginPage from './containers/Login/Login';
import SignupPage from './containers/Signup/Signup';

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/login" component={LoginPage}></Route>
                <Route exact path="/signup" component={SignupPage}></Route>
                <Route component={App}></Route>
            </Switch>
            <ToastContainer
                autoClose={3000}
            />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
