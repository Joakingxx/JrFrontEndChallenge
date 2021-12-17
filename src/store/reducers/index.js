import { combineReducers } from "redux";
import { serviciosReducer } from "./serviciosReducer";

export default combineReducers({
    serviciosReducer: serviciosReducer,
});
