import { GET_TOP10 } from "../../../const";

const initialState = [];

export function Top10Reducer(state = initialState, action) {
    switch (action.type) {
        case GET_TOP10: {
            return action.payload;
        }
        default:
            return state;
    }
}
