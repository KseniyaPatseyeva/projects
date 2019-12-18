import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import * as listAction from '../../actions/listActions';
import {Container, ListGroup, Pagination} from "react-bootstrap";
import Counter from "./CounterContainer";

class ListBox extends PureComponent {

    listView(data, index) {
        if (index >= 10) {
            this.props.dequeueMessage(0)
        }
        return (
            <ListGroup.Item action href="#" className="flex-column align-items-start active"
               key={index}>
                <Container>
                    <h5 className="mb-1">{data.message}: {data.car}</h5>
                    <small>{data.datetime}</small>
                </Container>
            </ListGroup.Item>
        )
    }

    paginationBasic() {
        return (
            <div>
                <Pagination.First/>
                <Pagination.Prev/>
                <Pagination>
                    {/*{items}*/}
                </Pagination>
                <Pagination.Next/>
                <Pagination.Last/>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Counter/>
                <ListGroup>
                    {this.props.cars.slice(0).reverse().map((car, i) => this.listView(car, i))}
                </ListGroup>
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