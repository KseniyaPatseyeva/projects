import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getMessages} from "../../actions/tableActions";
import {Pagination, Table} from "react-bootstrap";

class TableBox extends PureComponent {

    componentDidMount() {
        this.props.getMessages(0);
    }

    handlePageClick(page) {
        this.props.getMessages(page - 1);
    }

    pagingView() {
        let items = [];
        for (let number = 1; number <= this.props.totalPages; number++) {
            items.push(
                <Pagination.Item key={number} active={number === this.props.currentPage + 1}>
                    {number}
                </Pagination.Item>,
            );
        }
        return items;
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
                <Pagination onChange={this.handlePageClick.bind(this)}>
                    {this.pagingView()}
                </Pagination>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        messages: state.table.data.records,
        currentPage: state.table.data.currentPage,
        pageSize: state.table.data.pageSize,
        totalPages: state.table.data.totalPages
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMessages: (page) => dispatch(getMessages(page))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableBox)