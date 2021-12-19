import { combineReducers } from "redux";
import { CategoriasReducer } from "./categoriasReducer";
import { Top10Reducer } from "./Top10Reducer";
export default combineReducers({
  CategoriasReducer: CategoriasReducer,
  Top10Reducer: Top10Reducer,
});
