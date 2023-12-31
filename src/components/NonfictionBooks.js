import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchBooksByList } from "../redux/listActions";
import ListBook from "./ListBook";

const ListBooks = ({ books, loading, error, fetchBooksByList }) => {
  const location = useLocation();
  const path = location.pathname;
  const list_name_encoded = path.substring(path.lastIndexOf("/") + 1);

  useEffect(() => {
    const fetchList = async () => {
      await fetchBooksByList(list_name_encoded);
    };
    fetchList();
  }, [list_name_encoded]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>{books && books.map((book) => <ListBook book={book} />)}</div>;
};

const mapStateToProps = ({ books, loading, error }) => {
  console.log("Lists: ", books);
  return {
    books: books.books,
    loading,
    error,
  };
};

const mapDispatchToProps = {
  fetchBooksByList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListBooks);
