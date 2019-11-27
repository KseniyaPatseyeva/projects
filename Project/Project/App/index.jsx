import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers';
import CounterComponent from "./containers/CounterComponent";

const store = createStore(reducers, 42);

render(
    <Provider store={store}>
        <CounterComponent defaultValue={10}/>
    </Provider>,
    document.getElementById('root')
)