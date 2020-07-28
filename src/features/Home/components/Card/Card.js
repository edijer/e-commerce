import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";

import css from "./Card.module.css";
import * as ROUTES from "../../../../Routes";

const Card = (props) => {
  const { book, handleBuyNow } = props;

  return (
    <div className={css.card} key={book.id}>
      <div className={css.bookThumbnailSection}>
        <img
          src={book.imageUrl}
          alt={book.title}
          className={css.bookThumbnail}
        />
      </div>

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
          <div className={clsx("text-xs", css.bookDescription)}>
            {book.description}
          </div>
        </Link>
      </div>
      <div className={css.bookActionSection}>
        <button
          className={clsx("btn btn-primary", css.button)}
          onClick={() => handleBuyNow(book.id)}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  handleBuyNow: PropTypes.func.isRequired,
};

export default Card;
