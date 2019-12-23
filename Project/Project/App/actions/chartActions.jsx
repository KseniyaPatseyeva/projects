import {GET_DATA_ERROR, GET_DATA_SUCCESS} from "./actionTypes";

export function getData() {
    return (dispatch) => {
        fetch('api/Messages/stats/2019-05-25', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
            .then((response) => {
                return response.json();
            }).then((data) => {
            dispatch({
                type: GET_DATA_SUCCESS,
                payload: data
            });
        }).catch((ex) => {
            dispatch({type: GET_DATA_ERROR, payload: ex});
        });
    }
}