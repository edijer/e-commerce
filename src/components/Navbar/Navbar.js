import React, { useState } from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import "./Navbar.css";
import * as ROUTES from "../../Routes";

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
    cart: state.cart,
  };
};

const Navbar = ({ currentPage, cart }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleExpandClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <span className="title">
        {currentPage?.title
          ? `eCommerce Site | ${currentPage.title}`
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
            {cart?.totalCount ? `Cart (${cart.totalCount})` : "Cart"}
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
