import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Table } from "react-bootstrap";
import Pagination from "react-js-pagination";
import { getData } from "../../actions/fetchAction";
import { GET_MESSAGES_ERROR, GET_MESSAGES_SUCCESS } from "../../actions/actionTypes";

class TableBox extends PureComponent {

    constructor(props) {
        super(props);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        this.props.getMessages(1);
    }

    handlePageChange(pageNumber) {
        this.props.getMessages(pageNumber);
    }

    tableView(data, index) {
        let action;
        if (data.isArrived) {
            action = 'arrived'
        } else {
            action = 'left'
        }

        return (
            <tr key={index}>
                <td>{data.id}</td>
                <td>{data.licensePlate}</td>
                <td>{action}</td>
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
                <Pagination
                    activePage={this.props.currentPage}
                    itemsCountPerPage={this.props.pageSize}
                    totalItemsCount={this.props.totalPages * this.props.pageSize}
                    onChange={this.handlePageChange}
                    innerClass="pagination d-flex justify-content-center"
                    itemClass="page-item"
                    linkClass="page-link"
                />
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
        getMessages: (page) => dispatch(getData('page/' + page, GET_MESSAGES_SUCCESS, GET_MESSAGES_ERROR))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableBox)