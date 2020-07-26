import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Card.css";
import * as ROUTES from "../../../../Routes";

const Card = ({ book }) => {
  return (
    <div className="card" key={book.id}>
      <img src={book.imageUrl} alt={book.title} className="book-thumbnail" />
      <div className="book-details">
        <Link
          to={{
            pathname: ROUTES.DETAILS,
            state: {
              book,
            },
          }}
          style={{ textDecoration: "none" }}
        >
          <div className="book-title">{book.title}</div>
          <div className="book-description">{book.description}</div>
        </Link>
      </div>
      <div className="book-action">
        <button className="action-button">Buy Now</button>
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
};

export default Card;
