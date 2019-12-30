import {GET_COUNT_SUCCESS, GET_COUNT_ERROR} from '../actions/actionTypes'

export default function counter(state = 0, action) {
    switch (action.type) {
        case GET_COUNT_SUCCESS:
            return {
                count: action.payload
            };
        case GET_COUNT_ERROR:
        default:
            return state;
    }
}