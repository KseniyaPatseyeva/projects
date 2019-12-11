import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as listAction from '../../actions/listActions';

class ListBox extends PureComponent {

    listView(data, index) {
        if (index >= 10){
            this.props.dequeueMessage(0)
        }
        return (
            <li key={index}>
                {data.message} : {data.car}, {data.datetime}
            </li>
        )
    }

    render() {
        return (
            <div>
                {<ul>
                    {this.props.cars.slice(0).reverse().map((car, i) => this.listView(car, i))}
                </ul>}
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
        enqueueMessage: (message, licensePlate, datetime) => dispatch(listAction.enqueueMessage(message, licensePlate,datetime)),
        dequeueMessage: index => dispatch(listAction.dequeueMessage(index))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(ListBox);