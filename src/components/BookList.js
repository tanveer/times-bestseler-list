import Books from "./Books";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../redux/actions";
import Book from "./Book";

const BookList = ({ list }) => {
  return (
    <div className="row row-cols-1 row-cols-md-5">
      {list.books.map((book) => {
        return (
          <div key={book.title}>
            <Book book={book} />
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
