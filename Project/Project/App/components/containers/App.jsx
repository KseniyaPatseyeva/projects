import React from 'react';
import Counter from "./CounterContainer";
import Table from "./TableBox";
import {Navbar, Container} from 'react-bootstrap';
import Chart from "./Chart";
import {Datepicker} from "../Datepicker";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar sticky="top" bg="light" variant="light">
                    <h2>Project</h2>
                </Navbar>
                <Container>
                    <div className=" p-2 d-flex flex-row">
                        <div className="w-100 bd-highlight">
                            <Chart/>
                        </div>
                        <div className="d-flex flex-row align-self-center">
                            <div className="m-2">
                            <Datepicker/>
                            </div>
                            <div className="m-2">
                            <Datepicker/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Counter/>
                        <Table/>
                    </div>
                </Container>
                <Navbar sticky="bottom">
                    <Navbar.Text>© 2019-2020 .NET Student Labs 2019</Navbar.Text>
                </Navbar>
            </div>
        );
    }
};