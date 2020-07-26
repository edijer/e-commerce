import React from "react";
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

export default Card;
