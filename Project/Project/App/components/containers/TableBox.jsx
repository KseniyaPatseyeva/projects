import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getMessages} from "../../actions/tableActions";
import {Pagination, Table} from "react-bootstrap";

class TableBox extends PureComponent {

    componentDidMount() {
        this.props.getMessages();
    }

    tableView(data, index) {
        return (
            <tr key={index}>
                <td>{data.id}</td>
                <td>{data.licensePlate}</td>
                <td>{data.actionType}</td>
                <td>{data.createdDateTime}</td>
            </tr>
        )
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
                    {this.props.messages.map((message, i) => this.tableView(message, i))}
                    </tbody>
                </Table>
                <Pagination>
                </Pagination>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        messages: state.table.data
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMessages: () => dispatch(getMessages())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableBox)