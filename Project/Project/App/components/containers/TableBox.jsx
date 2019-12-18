import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getMessages} from "../../actions/tableActions";
import {bindActionCreators} from "redux";
import queryString from 'query-string'
import {Pagination, Table} from "react-bootstrap";

class TableBox extends PureComponent {

    constructor() {
        super();
        this.state = {query: location.search};
    }

    componentDidMount() {
        this.getMessages();
    }

    getMessages() {
        let pageIndex;
        const parsed = queryString.parse(location.search);
        if (parsed) {
            pageIndex = parsed['pageIndex'];
        }
        this.props.getMessages(pageIndex);
    }

    render() {
        const total = this.props.messages.totalPages;
        const pageSize = this.props.messages.pageSize;
        const pageNumbers = [];
        let queryTrailer = '';
        for (let i = 1; i <= Math.ceil(total / pageSize); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <Pagination.Item key={number}>
                    <Link className="link" to={"/parking?pageIndex=" + (number - 1) + queryTrailer}>{number}</Link>
                </Pagination.Item>
            );
        });

        let posts = this.props.messages.records.map(item => {
            return (
                <li key={item.id}>data={item}></li>
            );
        });

        return (
            <div>
                <Table striped bordered hover className="flex-column">
                </Table>
                <Pagination>
                    {renderPageNumbers}
                </Pagination>
                {posts}
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