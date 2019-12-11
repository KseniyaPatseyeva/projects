import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers';
import CounterComponent from "./components/containers/CounterContainer";
import ListBox from "./components/containers/ListBoxContainer";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
export default store;

render(
    <Provider store={store}>
        <ListBox/>
        <CounterComponent/>
    </Provider>,
    document.getElementById('root')
);