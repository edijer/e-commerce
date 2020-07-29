import React, { useState } from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import menuIcon from "./menu.svg";
import "./Navbar.css";
import { createCartInfo } from "../../types/cartInfo";
import * as ROUTES from "../../Routes";

const mapStateToProps = (state) => {
  return {
    currentPage: state.currentPage,
    cart: createCartInfo(state.cart.items),
  };
};

const Navbar = ({ currentPage, cart }) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleExpandClick = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
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
          <Link
            to={ROUTES.HOME}
            className="nav-links"
            onClick={handleLinkClick}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={ROUTES.MY_ORDERS}
            className="nav-links"
            onClick={handleLinkClick}
          >
            My Orders
          </Link>
        </li>
        <li>
          <Link
            to={ROUTES.CART}
            className="nav-links"
            onClick={handleLinkClick}
          >
            {cart?.totalCount ? `Cart (${cart.totalCount})` : "Cart"}
          </Link>
        </li>
      </ul>
      <span className="navbar-toggle">
        <button onClick={handleExpandClick} className="btn btn-link">
          <img
            src={menuIcon}
            alt="menu icon"
            width="24"
            height="24"
            style={{ margin: 0, padding: 0 }}
          />
        </button>
      </span>
    </nav>
  );
};

export default connect(mapStateToProps)(Navbar);
