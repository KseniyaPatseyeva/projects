import React from 'react';
import Counter from "./containers/Counter";
import Table from "./containers/TableBox";
import {Navbar, Container} from 'react-bootstrap';
import Chart from "./containers/Chart";
import DateField from "./containers/DateField";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar sticky="top" bg="light" variant="light">
                    <h2>Project</h2>
                </Navbar>
                <Container>
                    <div className="p-2 d-flex flex-column">
                        <div className="card border-secondary mb-3">
                            <div className="card-header">Select date period</div>
                            <div className="card-body">
                                <DateField/>
                            </div>
                        </div>
                        <div className="w-100 bd-highlight">
                            <Chart/>
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