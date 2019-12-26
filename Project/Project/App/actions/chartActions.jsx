import {GET_DATA_ERROR, GET_DATA_SUCCESS} from "./actionTypes";

export function getData(startData, endData) {
    return (dispatch) => {
        fetch('api/Messages/stats/' + startData + '/' + endData, {
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