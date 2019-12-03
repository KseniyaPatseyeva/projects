import React from 'react'
import CounterComponent from "./containers/CounterContainer";

export default class App extends React.Component {
    render() {
        return (<CounterComponent defaultValue={42}/>
        );
    }
}
