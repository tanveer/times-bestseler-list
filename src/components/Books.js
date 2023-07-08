import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../redux/actions";
import Book from "./Book";

const Books = ({ list }) => {
  return <div></div>;
};

const mapStateToProps = ({ books }) => {
  return { books };
};

export default connect(mapStateToProps)(Books);
