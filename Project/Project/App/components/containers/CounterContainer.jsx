import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {increaseCount, decreaseCount, initCount} from '../../actions/counterActions';

class Counter extends PureComponent {

    componentDidMount() {
        if (this.props.defaultValue) {
            this.props.handleInit(this.props.defaultValue);
        } else {
            this.props.handleInit(0);
        }
    }

    render() {
        return (
            <div>
                <h6> Counter {this.props.count}</h6>
                {/*<button onClick={this.props.handleIncrease}> Increase</button>*/}
                {/*<button onClick={this.props.handleDecrease}> Decrease</button>*/}
                {/*<button onClick={() => this.props.handleInit(this.props.defaultValue)}> Init</button>*/}
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
    handleIncrease: () => dispatch(increaseCount()),
    handleDecrease: () => dispatch(decreaseCount()),
    handleInit: (value) => dispatch(initCount(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);