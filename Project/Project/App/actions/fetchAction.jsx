export function getData(url, SUCCESS_ACTION, ERROR_ACTION) {
    return (dispatch) => {
        fetch('Messages/' + url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
            .then((response) => {
                return response.json();
            }).then((data) => {
            dispatch({
                type: SUCCESS_ACTION,
                payload: data
            });
        }).catch((ex) => {
            dispatch({type: ERROR_ACTION, payload: ex});
        });
    }
}