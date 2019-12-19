import {GET_MESSAGES_SUCCESS, GET_MESSAGES_ERROR} from '../actions/actionTypes'

const initialState = {
    data: {
        id: 0,
        licensePlate: '',
        arrivedTime:'',
        leftTime: ''
    }
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