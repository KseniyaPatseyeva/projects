import {CAR_ARRIVED, CAR_LEFT} from "../actions/actionTypes";

export default function processList(state = [], action) {
    switch (action) {
        case CAR_ARRIVED:
            return [
                ...state,
                {
                    id: action.payload.id,
                    licensePlate: action.payload.licensePlate,
                    datetime: action.payload.datetime
                }
            ];
        case CAR_LEFT:
            return state.filter((data, i) => i !== action.payload);
        default:
            return state;
    }
}