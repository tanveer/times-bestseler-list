import axios from "axios";

export const FETCH_BOOKS_REQUEST = "FETCH_BOOKS_REQUEST";
export const FETCH_BOOKS_SUCCESS = "FETCH_BOOKS_SUCCESS";
export const FETCH_BOOKS_FAILURE = "FETCH_BOOKS_FAILURE";

const _24Hours = 24 * 60 * 60 * 1000;

export const fetchBooks = () => {
  return (dispatch) => {
    dispatch(fetchBooksRequest());
    const cachedLists = localStorage.getItem("lists");
    const cachedTimestamp = localStorage.getItem("listsTimestamp");
    const currentTimestamp = new Date().getTime();

    const resetCache = () => {
      localStorage.removeItem("lists");
      localStorage.removeItem("listsTimestamp");
    };

    if (
      cachedLists &&
      cachedTimestamp &&
      currentTimestamp - cachedTimestamp < _24Hours
    ) {
      console.log("From Cached");
      dispatch(fetchBooksSuccess(JSON.parse(cachedLists))); // Use cached data if it's not expired
    } else {
      console.log("From API fetch");
      axios
        .get(
          "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=G9BGUB74PeBhtTukOacWXpYPUwEhAMVd"
        )
        .then((response) => {
          const lists = response.data.results.lists;
          dispatch(fetchBooksSuccess(lists));
          localStorage.setItem("lists", JSON.stringify(lists));
          localStorage.setItem("listsTimestamp", currentTimestamp); // Update the timestamp in localStorage
        })
        .catch((error) => {
          dispatch(fetchBooksFailure(error.message));
        });
      resetCache(); // Reset cache immediately after making the API call

      setInterval(() => {
        resetCache(); // Reset cache every 24 hours
      }, _24Hours);
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
