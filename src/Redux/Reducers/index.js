import { combineReducers } from "redux";
import todoReducers from "./todoRecucers";

const rootReducer = combineReducers({
  todoReducers,
});

export default rootReducer;
