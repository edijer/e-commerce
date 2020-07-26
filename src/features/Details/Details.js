import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import clsx from "clsx";

import { setSelectedBook } from "../../stores/bookSlice";
import css from "./Details.module.css";

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedBook: (book) => {
      dispatch(setSelectedBook(book));
    },
  };
};

const Details = (props) => {
  const { setSelectedBook } = props;
  const [book] = useState(props.location.state.book);

  useEffect(() => {
    setSelectedBook(book);

    return function cleanup() {
      setSelectedBook(null);
    };
  }, [book, setSelectedBook]);

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
            <button className={clsx("btn btn-primary", css.button)}>
              Add to cart
            </button>
            <button className={clsx("btn btn-primary", css.button)}>
              Buy Now
            </button>
          </div>
          <div>{book.description}</div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Details);
