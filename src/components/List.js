import { connect } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchBooks } from "../redux/actions";
import BookList from "./BookList";
import Books from "./Books";

const List = ({ lists, loading, error, fetchBooks }) => {
  const effectRan = useRef(false);
  const getTopFiveBooks = async () => {
    await fetchBooks();
  };

  useEffect(() => {
    if (effectRan.current === false) {
      getTopFiveBooks();
      return () => {
        console.log("unmounted");
        effectRan.current = true;
      };
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mt-5">
      {lists &&
        lists.lists.map((list) => (
          <BookList list={list} key={list.list_name_encoded} />
        ))}
    </div>
  );
};

const mapStateToProps = ({ lists, loading, error }) => {
  return { lists, loading, error };
};

const mapDispatchToProps = {
  fetchBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
