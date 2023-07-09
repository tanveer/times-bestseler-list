import React from "react";
import Book from "./components/Book";
import BookList from "./components/BookList";
import Header from "./components/header";
import Navbar from "./components/navbar";
import { _getTopFiveBooks } from "./api/nyt_api";

import List from "./components/List";
import { Routes, Route } from "react-router-dom";
import NonfictionBooks from "./components/NonfictionBooks";

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/:list_name" element={<NonfictionBooks />} />
      </Routes>
    </div>
  );
}

export default App;
