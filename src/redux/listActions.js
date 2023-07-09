// listActions.js

import axios from "axios";

export const FETCH_LIST_REQUEST = "FETCH_LIST_REQUEST";
export const FETCH_LIST_SUCCESS = "FETCH_LIST_SUCCESS";
export const FETCH_LIST_FAILURE = "FETCH_LIST_FAILURE";

export const fetchListRequest = () => ({
  type: FETCH_LIST_REQUEST,
});

export const fetchListSuccess = (books) => ({
  type: FETCH_LIST_SUCCESS,
  books,
});

export const fetchListFailure = (error) => ({
  type: FETCH_LIST_FAILURE,
  error,
});

export const fetchBooksByList = (listName) => {
  return (dispatch) => {
    dispatch(fetchListRequest());
    console.log(
      `https://api.nytimes.com/svc/books/v3/lists.json?api-key=${process.env.REACT_APP_API_KEY}&list=${listName}`
    );

    axios
      .get(
        `https://api.nytimes.com/svc/books/v3/lists.json?api-key=${process.env.REACT_APP_API_KEY}&list=${listName}`
      )
      .then((response) => {
        const books = response.data.results;
        dispatch(fetchListSuccess(books));
      })
      .catch((error) => {
        dispatch(fetchListFailure(error.message));
      });
  };
};
