import {ENQUEUE_MESSAGE, DEQUEUE_MESSAGE, GET_MESSAGES_SUCCESS} from "../actions/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case ENQUEUE_MESSAGE:
            return [
                ...state,
                Object.assign({}, action.payload)
            ];
        case DEQUEUE_MESSAGE:
            return state.filter((data, i) => i !== action.payload.id);
        case GET_MESSAGES_SUCCESS:
            return {...state, data: action.payload};
        default:
            return state;
    }
};