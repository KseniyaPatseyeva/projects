import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as carAction from '../../actions/listActions';
import store from '../../'
import {decreaseCount, increaseCount} from "../../actions/counterActions";

class ListBox extends PureComponent {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            licensePlate: ''
        }
    }

    handleChange(e) {
        this.setState({
            licensePlate: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let car = {
            licensePlate: this.state.licensePlate
        };
        this.setState({
            licensePlate: ''
        });
        this.props.createCar(car);
        store.dispatch(increaseCount())
    }

    listView(data, index) {
        return (
            <div>
                <div>
                    <li key={index}>
                        {data.licensePlate}
                    </li>
                </div>
                <div className>
                    <button onClick={(e) => this.deleteCar(e, index)}>
                        Remove
                    </button>
                </div>
            </div>
        )
    }

    deleteCar(e, index) {
        e.preventDefault();
        this.props.deleteCar(index);
        store.dispatch(decreaseCount())
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.licensePlate}/><br/>
                    <input type="submit" value="ADD"/>
                </form>
                {<ul>
                    {this.props.cars.map((car, i) => this.listView(car, i))}
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
        createCar: car => dispatch(carAction.createCar(car)),
        deleteCar: index => dispatch(carAction.deleteCar(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListBox);