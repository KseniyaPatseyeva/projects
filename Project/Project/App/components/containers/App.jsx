import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ListBox from "./ListBoxContainer";
import CounterComponent from "./CounterContainer";
import Table from "./TableBox";
import {Navbar, Container} from 'react-bootstrap';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar sticky="top" bg="light" variant="light">
                    <h2>Project</h2>
                </Navbar>
                <Container>
                <Table/>
                <ListBox/>
                </Container>
                <Navbar fixed="bottom">
                    <Navbar.Text>© 2019-2020 .NET Student Labs 2019</Navbar.Text>
                </Navbar>
            </div>
        );
    }
};