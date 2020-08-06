import { combineReducers } from "redux";
import toDos from "./todos";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  toDos,
  visibilityFilter,
});
