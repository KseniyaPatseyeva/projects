import {
    ENQUEUE_MESSAGE,
    DEQUEUE_MESSAGE,
    GET_MESSAGES_ERROR,
    GET_MESSAGES_SUCCESS,
    CAR_LEFT,
    CAR_ARRIVED
} from "./actionTypes";
import {decreaseCount, increaseCount} from "./counterActions";
import "isomorphic-fetch"

export function enqueueMessage(message, car, datetime) {
    return (dispatch) => {
        dispatch({
            type: ENQUEUE_MESSAGE,
            payload: {
                message: message,
                car: car,
                datetime: datetime
            }
        });
        switch (message) {
            case CAR_LEFT:
                dispatch(decreaseCount());
                break;
            case CAR_ARRIVED:
                dispatch(increaseCount());
                break;
        }
    }
}

export const dequeueMessage = (id) => {
    return {
        type: DEQUEUE_MESSAGE,
        payload: {
            id: id
        }
    }
};
