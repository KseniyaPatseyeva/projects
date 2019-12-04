import { combineReducers } from 'redux';

import counter from './counterReducer';
import cars from "./listReducer";

export default combineReducers({
    cars: cars,
    counter: counter
});