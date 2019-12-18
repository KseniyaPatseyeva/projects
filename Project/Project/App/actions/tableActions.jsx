import {GET_MESSAGES_ERROR, GET_MESSAGES_SUCCESS} from "./actionTypes";

export function getMessages(pageIndex = 1) {
    return (dispatch) => {
        let queryTrailer = '?pageIndex=' + pageIndex;
        fetch(window.constants.page + queryTrailer, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
            .then((response) => {
                return response.json();
            }).then((data) => {
            dispatch({type: GET_MESSAGES_SUCCESS, payload: data});
        }).catch((ex) => {
            dispatch({type: GET_MESSAGES_ERROR, payload: ex});
        });
    }
}