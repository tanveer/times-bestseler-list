import Book from "./Book";
import { book } from "../util/sample_book_data";
import Books from "./Books";

const BookList = ({ list }) => {
  return (
    <div class="row row-cols-1 row-cols-md-5">
      {list.books.map((book, index) => (
        <Book book={book} index={index} />
      ))}
    </div>
  );
};

export default BookList;
