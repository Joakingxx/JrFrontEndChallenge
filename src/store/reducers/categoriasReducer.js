import { GET_CAT } from "../../../const";

const initialState = [];

export function CategoriasReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CAT: {
            return action.payload;
        }
        default:
            return state;
    }
}
