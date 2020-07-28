import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import clsx from "clsx";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import { setTitle } from "../../stores/currentPageSlice";
import { addToCart } from "../../stores/cartSlice";
import css from "./Details.module.css";
import * as ROUTES from "../../Routes";

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => {
      dispatch(setTitle(title));
    },
    addToCart: async (bookId) => {
      await dispatch(addToCart({ bookId }));
    },
  };
};

const Details = (props) => {
  const { history, setTitle, addToCart } = props;
  const book = props.location.state.book;

  useEffect(() => {
    setTitle(book.title);

    return function cleanup() {
      setTitle("");
    };
  }, [book, setTitle]);

  const handleBuyNow = async () => {
    await addToCart(book.id);
    history.push(ROUTES.CART);
  };

  const handleAddToCart = async () => {
    await addToCart(book.id);
  };

  return (
    <div className={css.root}>
      <div className={css.main}>
        <div className={css.bookImage}>
          <img src={book.imageUrl} alt={book.title} />
        </div>
        <div className={css.bookDetails}>
          <div className={css.bookTitle}>{book.title}</div>
          <div>{`Price: ${book.price.toLocaleString("en-US")}`}</div>
          <div>{`Author: ${book.author}`}</div>
          <div>{`Pages: ${book.pageCount}`}</div>
          <div>{`ISBN: ${book.isbn}`}</div>
          <div className={css.bookActionSection}>
            <button
              className={clsx("btn btn-primary", css.button)}
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
            <button
              className={clsx("btn btn-primary", css.button)}
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
          <div>{book.description}</div>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  history: PropTypes.object.isRequired,
  setTitle: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default compose(connect(null, mapDispatchToProps), withRouter)(Details);
