import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ListBox from "./ListBoxContainer";
import CounterComponent from "./CounterContainer";

export default class App extends React.Component {
    render() {
        return (
            <Router basename="Parking">
                <ListBox/>
                <CounterComponent/>
            </Router>
        );
    }
};