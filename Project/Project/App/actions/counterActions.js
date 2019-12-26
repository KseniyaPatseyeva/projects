import {INCREMENT, DECREMENT, INIT} from "./actionTypes";

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

export function initCount() {
    return (dispatch) => {
        fetch('api/Messages/count/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
            .then((response) => {
                return response.json();
            }).then((data) => {
            dispatch({
                type: INIT,
                payload: data
            });
        }).catch((ex) => {
            dispatch({type: INIT, payload: ex});
        });
    }
}