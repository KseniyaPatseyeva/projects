import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from "./components/containers/App";
import {enqueueMessage} from "./actions/listActions";
import {CAR_ARRIVED} from "./actions/actionTypes";
import dateTime from "date-time";
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

store.dispatch(enqueueMessage(CAR_ARRIVED, '1234', dateTime()));
store.dispatch(enqueueMessage(CAR_ARRIVED, '1224', dateTime()));