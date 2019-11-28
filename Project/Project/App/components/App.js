import React from 'react'
import CounterComponent from "../containers/CounterComponent";

export default class App extends React.Component {
    render() {
        return (<CounterComponent defaultValue={42}/>
        );
    }
}
