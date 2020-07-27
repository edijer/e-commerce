import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link, withRouter } from "react-router-dom";

import { addToCart } from "../../../../stores/cartSlice";
import css from "./Card.module.css";
import * as ROUTES from "../../../../Routes";

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: async (bookId) => {
      await dispatch(addToCart({ bookId }));
    },
  };
};

const Card = (props) => {
  const { history, book, addToCart } = props;

  const handleBuyNow = async () => {
    await addToCart(book.id);
    history.push(ROUTES.CART);
  };

  return (
    <div className={css.card} key={book.id}>
      <img src={book.imageUrl} alt={book.title} className={css.bookThumbnail} />
      <div className={css.bookDetails}>
        <Link
          to={{
            pathname: ROUTES.DETAILS,
            state: {
              book: book,
            },
          }}
          style={{ textDecoration: "none" }}
        >
          <div className={css.bookTitle}>{book.title}</div>
          <div className={css.bookDescription}>{book.description}</div>
        </Link>
      </div>
      <div className={css.bookActionSection}>
        <button
          className={clsx("btn btn-primary", css.button)}
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  history: PropTypes.object.isRequired,
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default compose(connect(null, mapDispatchToProps), withRouter)(Card);
