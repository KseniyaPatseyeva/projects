import { GET_ALL_CARS, CAR_ARRIVED, REMOVE_CAR } from "./actionTypes";

let nextCarInfoId = 0;

export const createCar = (car) => {
    return {
        type: CAR_ARRIVED,
        payload: {
            car: car
        }
    }
};

export const deleteCar = (id) => {
    return {
        type: REMOVE_CAR,
        payload: {
            id: id
        }
    }
}