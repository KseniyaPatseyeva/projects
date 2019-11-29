import * as actionTypes from '../actions/actionTypes'

function handleChange(state, change) {
    const {count} = state;
    return ({
        count: count + change
    })
}

export default function counter(state = 0, action) {
    const {count} = state;
    switch (action.type) {
        case actionTypes.INCREMENT:
            return handleChange(state, 1);
        case actionTypes.DECREMENT:
            return handleChange(state, -1);
        case actionTypes.INIT:
            return {
                count: action.payload
            };
        default:
            return state;
    }
}