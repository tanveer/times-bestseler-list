import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
} from "./actions";

const initialState = {
  loading: false,
  lists: [],
  error: "",
};

const lists = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_BOOKS_SUCCESS:
      return {
        loading: false,
        lists: action.lists,
        error: "",
      };
    case FETCH_BOOKS_FAILURE:
      return {
        loading: false,
        lists: [],
        error: action.error.message,
      };
    default:
      return state;
  }
};

export default lists;
