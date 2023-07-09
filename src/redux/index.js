import { combineReducers } from "redux";
import lists from "./reducer";
import listReducer from "./listByNameRecuder";

const rootReducer = combineReducers({
  lists,
  books: listReducer,
});

export default rootReducer;
