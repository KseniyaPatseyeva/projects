import {combineReducers} from 'redux';

import counter from './counterReducer';
import table from "./tableReducer";
import chart from "./chartReducer";
import date from "./dateReducer";

export default combineReducers({
    counter: counter,
    table: table,
    chart: chart,
    date: date
});