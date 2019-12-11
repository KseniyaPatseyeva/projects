import {INCREMENT, DECREMENT, INIT} from '../actions/actionTypes'

function handleChange(state, change) {
    const {count} = state;
    return ({
        count: count + change
    })
}

export default function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return handleChange(state, 1);
        case DECREMENT:
            return handleChange(state, -1);
        case INIT:
            return {
                count: action.payload
            };
        default:
            return state;
    }
}