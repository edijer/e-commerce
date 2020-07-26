import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { setSelectedBook } from "../../stores/bookSlice";
import "./Details.css";

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
    <div className="root">
      <div className="book-image"></div>
      <div className="book-details"></div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Details);
