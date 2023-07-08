import axios from "axios";

export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";

export const fetchBooks = () => {
  return (dispatch) => {
    dispatch(fetchBooksRequest());
    const cacheLists = localStorage.getItem("lists");
    if (cacheLists) {
      dispatch(fetchBooksSuccess(JSON.parse(cacheLists)));
    } else {
      axios
        .get(
          "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=G9BGUB74PeBhtTukOacWXpYPUwEhAMVd"
        )
        .then((response) => {
          const lists = response.data.results.lists;
          dispatch(fetchBooksSuccess(lists));
          localStorage.setItem("lists", JSON.stringify(lists));
        })
        .catch((error) => {
          dispatch(fetchBooksFailure(error.message));
        });
    }
  };
};

export const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});

export const fetchBooksSuccess = (lists) => ({
  type: FETCH_BOOKS_SUCCESS,
  lists,
});

export const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  error,
});
