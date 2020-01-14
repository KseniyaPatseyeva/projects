import {SET_END_DATE, SET_START_DATE} from "../actions/actionTypes";

const initialState = {
    startDate: 0,
    endDate: 0
};

export default function date(state = initialState, action) {
    switch (action.type) {
        case SET_START_DATE:
            return {...state, startDate: action.payload};
        case SET_END_DATE:
            return {...state, endDate: action.payload};
        default:
            return state;
    }
}