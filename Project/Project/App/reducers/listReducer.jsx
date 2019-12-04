import {CAR_ARRIVED, REMOVE_CAR} from "../actions/actionTypes";

export default (state = [], action) => {
    switch (action.type){
        case CAR_ARRIVED:
            return [
                ...state,
                Object.assign({}, action.payload.car)
            ];
        case REMOVE_CAR:
            return state.filter((data, i) => i !== action.payload.id);
        default:
            return state;
    }
};