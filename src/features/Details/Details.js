import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import clsx from "clsx";

import { setTitle } from "../../stores/currentPageSlice";
import css from "./Details.module.css";

const mapDispatchToProps = (dispatch) => {
  return {
    setTitle: (title) => {
      dispatch(setTitle(title));
    },
  };
};

const Details = (props) => {
  const { setTitle } = props;
  const [book] = useState(props.location.state.book);

  useEffect(() => {
    setTitle(book.title);

    return function cleanup() {
      setTitle("");
    };
  }, [book, setTitle]);

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
