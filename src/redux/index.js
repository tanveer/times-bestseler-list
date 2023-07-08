import { combineReducers } from "redux";
import lists from "./reducer";

const rootReducer = combineReducers({
  lists,
});

export default rootReducer;
