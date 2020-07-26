import React, { useState, useEffect } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./Home.css";
import { loadBooks } from "../../stores/bookSlice";

const mapDispatchToProps = (dispatch) => {
  return {
    loadBooks: (page, rowsPerPage) => {
      dispatch(loadBooks({ page, limit: rowsPerPage }));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

const Home = (props) => {
  const { books, loadBooks, defaultRowsPerPage = 20 } = props;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  useEffect(() => {
    // page is zero based
    loadBooks(page + 1, rowsPerPage);
  }, [page, rowsPerPage, loadBooks]);

  return (
    <div className="root">
      <div className="cards">
        {books.items.slice(0, rowsPerPage).map((book) => {
          return (
            <div className="card" key={book.id}>
              <img
                src={book.imageUrl}
                alt={book.title}
                className="book-thumbnail"
              />
              <div className="book-details">
                <div>{book.title}</div>
                <div className="book-description">{book.description}</div>
              </div>
              <div className="book-action">
                <button className="action-button">Buy Now</button>
              </div>
            </div>
          );
        })}

        {/* <div class="card">ONE</div>
        <div class="card">TWO</div>
        <div class="card">THREE</div>
        <div class="card">FOUR</div>
        <div class="card">FIVE</div>
        <div class="card">SIX</div>
        <div class="card">SEVEN</div>
        <div class="card">EIGHT</div>
        <div class="card">NINE</div>
        <div class="card">TEN</div>
        <div class="card">ELEVEN</div>
        <div class="card">TWELVE</div> */}
      </div>
    </div>
  );
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(Home);
