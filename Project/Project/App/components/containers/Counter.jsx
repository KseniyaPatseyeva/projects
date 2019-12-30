import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {getData} from "../../actions/fetchAction";
import {GET_COUNT_ERROR, GET_COUNT_SUCCESS} from "../../actions/actionTypes";

class Counter extends PureComponent {

    componentDidMount() {
        this.props.handleInit();
    }

    render() {
        return (
            <div>
                <h6> Free parking slots: {this.props.count}</h6>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.counter.count,
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleInit: () => dispatch(getData('count/', GET_COUNT_SUCCESS, GET_COUNT_ERROR))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);