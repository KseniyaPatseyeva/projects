import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from "./components/containers/App";

export const store = createStore(reducers, compose(applyMiddleware(thunk)));

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(enqueueMessage(CAR_ARRIVED, '1234', dateTime()));
store.dispatch(enqueueMessage(CAR_ARRIVED, '1224', dateTime()));