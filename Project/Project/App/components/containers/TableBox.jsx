import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getMessages} from "../../actions/tableActions";
import {bindActionCreators} from "redux";
import {Pagination, Table} from "react-bootstrap";

class TableBox extends PureComponent {

    constructor() {
        super();
        this.state = {cars: []};
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        let xhr = new XMLHttpRequest();
        xhr.open("get", 'api/Cars', true);
        xhr.onload = function () {
            let data = JSON.parse(xhr.responseText);
            this.setState({ cars: data });
        }.bind(this);
        xhr.send();
    }


    render() {
        return (
            <div>
                <Table striped bordered hover className="flex-column">
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Licence plate</th>
                        <th>Action</th>
                        <th>Time</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.cars.map(function(car){
                        return (<tr key={car.id}>
                            <td>{car.id}</td>
                            <td>{car.licensePlate}</td>
                            <td>{car.arrivedTime}</td>
                        </tr>)
                    })}
                    </tbody>
                </Table>
                <Pagination>
                </Pagination>
            </div>
        );
    }
}

let mapProps = (state) => {
    return {
        messages: state.table.data,
        error: state.table.error
    }
};

let mapDispatch = (dispatch) => {
    return {
        getMessages: bindActionCreators(getMessages, dispatch)
    }
};

export default connect(mapProps, mapDispatch)(TableBox)