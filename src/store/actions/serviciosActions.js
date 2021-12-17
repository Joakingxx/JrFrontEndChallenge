export function hola() {
    return function (dispatch) {
        dispatch({
            type: "state",
            payload: "hola",
        });
    };
}
