import {INCREMENT, DECREMENT, INIT} from '../actions/CounterActions'

function initState(state, value) {
    const {count} = state;
    return ({
        count: value
    })
}

function handleChange(state, change) {
    const {count} = state;
    return ({
        count: count + change
    })
}

export default function counter(state = 0, action) {
    const {count} = state;
    switch (action.type) {
        case INCREMENT:
            return handleChange(state, 1);
        case DECREMENT:
            return handleChange(state, -1);
        case INIT:
            return initState(state, 10);
        default:
            return state;
    }
}