import React, { useState } from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import * as ROUTES from "../../Routes";

const mapStateToProps = (state) => {
  return {
    selectedBook: state.books.selectedBook,
  };
};

const Navbar = ({ selectedBook }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleExpandClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <span className="title">
        {selectedBook
          ? `eCommerce Site | ${selectedBook.title}`
          : "eCommerce Site"}
      </span>
      <ul
        className={clsx("main-nav", {
          "menu-active": showMenu,
        })}
      >
        <li>
          <NavLink to={ROUTES.HOME} exact className="nav-links">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.MY_ORDERS} exact className="nav-links">
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink to={ROUTES.CART} exact className="nav-links">
            Cart
          </NavLink>
        </li>
      </ul>
      <span className="navbar-toggle">
        <button onClick={handleExpandClick} className="btn btn-link">
          Expand
        </button>
      </span>
    </nav>
  );
};

export default connect(mapStateToProps)(Navbar);
