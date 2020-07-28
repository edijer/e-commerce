import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { Card } from "./components";
import { loadBooks } from "../../stores/bookSlice";
import { addToCart } from "../../stores/cartSlice";
import * as ROUTES from "../../Routes";
import css from "./Home.module.css";

const mapDispatchToProps = (dispatch) => {
  return {
    loadBooks: (page, limit) => {
      dispatch(loadBooks({ page, limit }));
    },
    addToCart: async (bookId) => {
      await dispatch(addToCart({ bookId }));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const Home = (props) => {
  const { history, books, loadBooks, addToCart, limit = 20 } = props;
  const [page, setPage] = useState(0);

  useEffect(() => {
    loadBooks(page + 1, limit);
  }, [page, limit, loadBooks]);

  const handleBuyNow = async (bookId) => {
    await addToCart(bookId);
    history.push(ROUTES.CART);
  };

  const handleShowMore = () => {
    setPage(page + 1);
  };

  if (books.loaded && books.items.length === 0) {
    return (
      <div className={css.root} role="alert">
        <span>There are no books available.</span>
      </div>
    );
  }

  return (
    <div className={css.root}>
      <div className={css.cards} role="list">
        {books.items.map((book) => {
          return <Card book={book} key={book.id} handleBuyNow={handleBuyNow} />;
        })}
      </div>
      {books.totalCount !== books.items.length && (
        <div className={css.actionSection}>
          <button className="btn btn-link text-sm" onClick={handleShowMore}>
            {`Show More (${books.items.length} of ${books.totalCount})`}
          </button>
        </div>
      )}
    </div>
  );
};

Home.propTypes = {
  history: PropTypes.object.isRequired,
  books: PropTypes.object.isRequired,
  loadBooks: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  limit: PropTypes.number,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Home);
