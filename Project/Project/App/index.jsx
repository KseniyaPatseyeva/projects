import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers';
import App from './components/app';
import ListBoxContainer from "./components/containers/ListBoxContainer";
import CounterComponent from "./components/containers/CounterContainer";
import ListBox from "./components/containers/ListBoxContainer";

const store = createStore(reducers);

render(
    <Provider store={store}>
        <ListBox/>
        <CounterComponent defaultValue={42}/>
    </Provider>,
    document.getElementById('root')
);