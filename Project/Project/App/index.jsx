import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from "./components/App";
import {BrowserRouter as Router} from "react-router-dom";

export const store = createStore(reducers, compose(applyMiddleware(thunk)));

render(
    <Provider store={store}>
        <Router basename="/">
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
);