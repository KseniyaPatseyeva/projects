import {combineReducers} from 'redux';

import counter from './counterReducer';
import cars from "./listReducer";
import table from "./tableReducer";

export default combineReducers({
    cars: cars,
    counter: counter,
    table: table
});