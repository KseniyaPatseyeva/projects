import { CAR_ARRIVED, CAR_LEFT } from "./actionTypes";

let nextCarInfoId = 0;

export const addCarInfo = (licensePlate, datetime) => {
    return {
        type: CAR_ARRIVED,
        payload: {
            id: nextCarInfoId++,
            licensePlate,
            datetime
        }
    }
};

export const deleteCarInfo = (id) => {
    return {
        type: CAR_LEFT,
        payload: id
    }
};