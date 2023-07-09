// listReducer.js

import {
  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
} from "./listActions";

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        books: action.books,
        loading: false,
        error: null,
      };
    case FETCH_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default listReducer;
