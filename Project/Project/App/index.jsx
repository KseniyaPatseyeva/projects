import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers';
import CounterComponent from "./components/containers/CounterContainer";
import ListBox from "./components/containers/ListBoxContainer";
import {enqueueMessage} from "./actions/listActions";
import {CAR_ARRIVED} from "./actions/actionTypes";

export const store = createStore(reducers, compose(applyMiddleware(thunk)));
import dateTime from "date-time";

render(
    <Provider store={store}>
        <ListBox/>
        <CounterComponent/>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(enqueueMessage(CAR_ARRIVED, '1234', dateTime()));
store.dispatch(enqueueMessage(CAR_ARRIVED, '1224', dateTime()));