import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Card } from "./components";
import { loadBooks } from "../../stores/bookSlice";
import css from "./Home.module.css";

const mapDispatchToProps = (dispatch) => {
  return {
    loadBooks: (page, limit) => {
      dispatch(loadBooks({ page, limit }));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const Home = (props) => {
  const { books, loadBooks, defaultLimit = 20 } = props;

  const [page, setPage] = useState(0);
  const [limit] = useState(defaultLimit);

  useEffect(() => {
    loadBooks(page + 1, limit);
  }, [page, limit, loadBooks]);

  const handleShowMore = () => {
    setPage(page + 1);
  };

  return (
    <div className={css.root}>
      <div className={css.cards}>
        {books.items.map((book) => {
          return <Card book={book} key={book.id} />;
        })}
      </div>
      <div className={css.actionSection}>
        <button className="btn btn-link" onClick={handleShowMore}>
          {`Show More (${books.items.length} of ${books.totalCount})`}
        </button>
      </div>
    </div>
  );
};

Home.propTypes = {
  books: PropTypes.object.isRequired,
  loadBooks: PropTypes.func.isRequired,
  defaultLimit: PropTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
