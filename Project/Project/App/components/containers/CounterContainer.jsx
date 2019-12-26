import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {increaseCount, decreaseCount, initCount} from '../../actions/counterActions';

class Counter extends PureComponent {

    componentDidMount() {
        this.props.handleInit();
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
    handleInit: () => dispatch(initCount())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);