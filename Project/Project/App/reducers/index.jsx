import {combineReducers} from 'redux';

import counter from './counterReducer';
import table from "./tableReducer";
import chart from "./chartReducer";

export default combineReducers({
    counter: counter,
    table: table,
    chart: chart
});