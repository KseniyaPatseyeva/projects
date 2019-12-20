import React from 'react';
import Counter from "./CounterContainer";
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
                    <Counter/>
                    <Table/>
                </Container>
                <Navbar fixed="bottom">
                    <Navbar.Text>© 2019-2020 .NET Student Labs 2019</Navbar.Text>
                </Navbar>
            </div>
        );
    }
};