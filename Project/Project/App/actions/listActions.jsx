import { ENQUEUE_MESSAGE, DEQUEUE_MESSAGE } from "./actionTypes";

let nextCarInfoId = 0;

export const enqueueMessage = (message, car, datetime) => {
    return {
        type: ENQUEUE_MESSAGE,
        payload: {
            message: message,
            car: car,
            datetime: datetime
        }
    }
};

export const dequeueMessage = (id) => {
    return {
        type: DEQUEUE_MESSAGE,
        payload: {
            id: id
        }
    }
}