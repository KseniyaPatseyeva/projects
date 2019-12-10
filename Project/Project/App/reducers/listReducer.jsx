import {ENQUEUE_MESSAGE, DEQUEUE_MESSAGE} from "../actions/actionTypes";

export default (state = [], action) => {
    switch (action.type){
        case ENQUEUE_MESSAGE:
            return [
                ...state,
                Object.assign({}, action.payload)
            ];
        case DEQUEUE_MESSAGE:
            return state.filter((data, i) => i !== action.payload.id);
        default:
            return state;
    }
};