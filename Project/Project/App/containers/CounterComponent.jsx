import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {increaseCount, decreaseCount, initCount} from '../actions/CounterActions';

class Counter extends PureComponent {

    componentDidMount() {
        if (this.props.defaultValue) {
            this.props.handleInit(this.props.defaultValue);
        }
    }

    render() {
        return (
            <div>
                <h1> Counter </h1>
                <h1> {this.props.count} </h1>
                <button onClick={this.props.handleIncrease}> Increase</button>
                <button onClick={this.props.handleDecrease}> Decrease</button>
                <button onClick={this.props.handleInit}> Init</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.counter.count,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        handleIncrease: increaseCount,
        handleDecrease: decreaseCount,
        handleInit: initCount,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);