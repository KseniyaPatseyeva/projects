import { INCREMENT, DECREMENT, INIT } from "./actionTypes";

export function increaseCount() {
    return {
        type: INCREMENT
    };
}

export function decreaseCount() {
    return {
        type: DECREMENT
    };
}

export function initCount(value) {
    return {
        type: INIT,
        payload: value
    };
}