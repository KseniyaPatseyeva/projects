import {combineReducers} from 'redux';

import counter from './counterReducer';
import table from "./tableReducer";

export default combineReducers({
    counter: counter,
    table: table
});