import * as actionTypes from '../actions/actionTypes'

export function increaseCount() {
    return {
        type: actionTypes.INCREMENT
    };
}

export function decreaseCount() {
    return {
        type: actionTypes.DECREMENT
    };
}

export function initCount(value) {
    return {
        type: actionTypes.INIT,
        payload: value
    };
}