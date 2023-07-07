import React from "react";
import Book from "./components/Book";
import BookList from "./components/BookList";
import Header from "./components/header";
import Navbar from "./components/navbar";
import { _getTopFiveBooks } from "./api/nyt_api";
import List from "./components/List";

function App() {
  const [result, setResult] = React.useState([]);

  const getTopFiveBooks = async () => {
    const result = await _getTopFiveBooks();
    console.log("In The appjs", result);
    setResult(result);
  };

  React.useEffect(() => {
    getTopFiveBooks();
  }, []);

  return (
    <div className="container mt-5">
      <Header />
      <Navbar />
      <List />
      {result && result.map((list) => <BookList list={list} />)}
    </div>
  );
}

export default App;
