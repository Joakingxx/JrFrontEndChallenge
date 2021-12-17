let initialState = [];

export function serviciosReducer(state = initialState, action) {
    switch (action.type) {
        case "state": {
            return state;
        }
        default:
            return state;
    }
}
