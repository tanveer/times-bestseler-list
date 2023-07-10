const ListBook = ({ book }) => {
  const { book_details, isbns, weeks_on_list } = book;
  const bookDetail = book_details[0];

  const timeOnTheList = () => {
    if (weeks_on_list <= 1) {
      return <p className="timeOnList">new this week</p>;
    }
    return <p className="timeOnList">{weeks_on_list} weeks on the list</p>;
  };
  return (
    <div className="card mb-3" style={{ maxWidth: "100%" }}>
      <div className="row">
        <div className="col col-md-10">
          <div className="card-body">
            <div>{timeOnTheList()}</div>
            <h3 className="bookTitle" style={{ marginBottom: "-0.1825rem" }}>
              {bookDetail.title}
            </h3>
            <p className="author_publisher">
              {bookDetail.contributor} | {bookDetail.publisher}
            </p>
            <p className="description">{bookDetail.description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
        <div className="col col-md-2">
          <img
            src={`https://storage.googleapis.com/du-prd/books/images/${
              isbns.length > 0 ? isbns[0].isbn13 : bookDetail.primary_isbn13
            }.jpg`}
            className="img-fluid rounded-end w-75 p-2"
            alt="book cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ListBook;
