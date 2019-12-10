import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as carAction from '../../actions/listActions';
import store from '../../'
import {decreaseCount, increaseCount} from "../../actions/counterActions";

class ListBox extends PureComponent {

    constructor(props) {
        super(props);
        this.handleMessage = this.handleMessage.bind(this);
    }

    handleMessage(e, message, licensePlate, datetime) {
        e.preventDefault();
        if (this.props.cars.length === 10) {
            this.deleteCar(this.props.cars.length - 1);
        }

        this.props.enqueueMessage(message, licensePlate, datetime);
        store.dispatch(increaseCount());
    }

    listView(data, index) {
        return (
            <li key={index}>
                {data.message} : {data.car}, {data.datetime}
            </li>
        )
    }

    deleteCar(index) {
        this.props.dequeueMessage(index);
        store.dispatch(decreaseCount())
    }

    render() {
        return (
            <div>
                <form>
                    <input type="submit" value="ARRIVE"
                           onClick={e => this.handleMessage(e, "Car arrived", "someplate", 'now')}/>
                    <input type="submit" value="LEFT"
                           onClick={e => this.handleMessage(e, "Car left", "someplate", 'now')}/>
                </form>
                {<ul>
                    {this.props.cars.slice(0).reverse().map((car, i) => this.listView(car, i))}
                </ul>}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        cars: state.cars
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        enqueueMessage: (message, licensePlate, datetime) => dispatch(carAction.enqueueMessage(message, licensePlate, datetime)),
        dequeueMessage: index => dispatch(carAction.dequeueMessage(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListBox);