import {GET_DATA_SUCCESS, GET_DATA_ERROR} from '../actions/actionTypes'

const initialState = {
    data: 0,
    error: ''
};

export default function chart(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_SUCCESS:
            return {...state, data: action.payload};
        case GET_DATA_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
}