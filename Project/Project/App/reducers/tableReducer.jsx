import {GET_MESSAGES_SUCCESS, GET_MESSAGES_ERROR} from '../actions/actionTypes'

const initialState = {
    data: {
        currentPage: 0,
        totalPages: 0,
        pageSize: 0,
        records: []
    },
    error: ''
};

export default function table(state = initialState, action) {
    switch (action.type) {
        case GET_MESSAGES_SUCCESS:
            return {...state, data: action.payload, error: ''};
        case GET_MESSAGES_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
}