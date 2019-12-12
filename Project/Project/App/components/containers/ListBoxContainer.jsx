import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as listAction from '../../actions/listActions';

class ListBox extends PureComponent {

    listView(data, index) {
        if (index >= 10) {
            this.props.dequeueMessage(0)
        }
        return (
            <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active" key={index}>
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{data.message}: {data.car}</h5>
                    <small>{data.datetime}</small>
                </div>
            </a>
        )
    }

    render() {
        return (
            <div className="list-group">
                <h3 className="list-group__caption">Last Actions</h3>
                {this.props.cars.slice(0).reverse().map((car, i) => this.listView(car, i))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        enqueueMessage: (message, licensePlate, datetime) => dispatch(listAction.enqueueMessage(message, licensePlate, datetime)),
        dequeueMessage: index => dispatch(listAction.dequeueMessage(index))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ListBox);