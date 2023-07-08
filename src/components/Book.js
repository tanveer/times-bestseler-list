const Book = ({ book, index }) => {
  return (
    <div className="col">
      <div className="card h-100" style={{ border: "none" }}>
        <img
          src={book.book_image}
          className="card-img-top"
          alt="book image"
          style={{
            height: 185,
            width: 115,
            margin: "auto",
            marginTop: 20,
            borderRadius: 0,
          }}
        />
        <div className="card-body">
          <p className="card-text mb-0 mt-0">
            <small
              className="text-body mt-0"
              style={{ fontSize: "0.65rem", fontWeight: "medium" }}
            >
              {book.weeks_on_list} weeks on the list
            </small>
          </p>
          <h3
            className="card-title"
            style={{ fontSize: "0.95rem", fontWeight: "bold" }}
          >
            {book.title}
          </h3>
          <p className="card-text" style={{ fontSize: "0.90rem" }}>
            {book.description}
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              Last updated 3 mins ago
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Book;
