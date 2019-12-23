import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getMessages} from "../../actions/tableActions";
import {Table} from "react-bootstrap";
import Pagination from "react-js-pagination";

class TableBox extends PureComponent {

    constructor(props){
        super(props);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentDidMount() {
        this.props.getMessages(0);
    }

    handlePageChange(pageNumber) {
        this.props.getMessages(pageNumber - 1);
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
                <Pagination
                    activePage={this.props.currentPage + 1}
                    itemsCountPerPage={this.props.pageSize}
                    totalItemsCount={this.props.totalPages * this.props.pageSize}
                    onChange={this.handlePageChange}
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
        getMessages: (page) => dispatch(getMessages(page))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TableBox)