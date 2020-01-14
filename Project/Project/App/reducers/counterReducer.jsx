import {GET_COUNT_SUCCESS, GET_COUNT_ERROR} from '../actions/actionTypes'

const initialState = {
    startDate: 0,
    error: false
};


export default function counter(state = initialState, action) {
    switch (action.type) {
        case GET_COUNT_SUCCESS:
            return {
                count: action.payload,
                error: false
            };
        case GET_COUNT_ERROR:
            return {
                count: 0,
                error: action.payload
            };
        default:
            return state;
    }
}