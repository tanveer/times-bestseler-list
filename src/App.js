import React from "react";
import Book from "./components/Book";
import BookList from "./components/BookList";
import Header from "./components/header";
import Navbar from "./components/navbar";
import { _getTopFiveBooks } from "./api/nyt_api";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux";
import List from "./components/List";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <Header />
        <Navbar />
        <List />
      </Provider>
    </div>
  );
}

export default App;
