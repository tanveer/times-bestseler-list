import Book from "./Book";

const Books = ({ res }) => {
  return (
    <div>
      {res.books.map((book) => (
        <Book book={book} />
      ))}
    </div>
  );
};

export default Books;
