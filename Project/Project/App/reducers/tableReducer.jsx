import {GET_MESSAGES_SUCCESS, GET_MESSAGES_ERROR} from '../actions/actionTypes'

const initialState = {
    data: {
        currentPage: 0,
        pageSize: 0,
        totalPages: 0,
        records: [{
            id: 0,
            licensePlate: '',
            isArrived: false,
            createdDateTime: ''
        }]
    },
    error: ''
};

export default function table(state = initialState, action) {
    switch (action.type) {
        case GET_MESSAGES_SUCCESS:
            return {...state, data: action.payload};
        case GET_MESSAGES_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
}