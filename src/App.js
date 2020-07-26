import React, { useState } from "react";
import clsx from "clsx";
import "./App.css";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const handleGG = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="navbar">
      <span className="title">eCommerce Site</span>
      <ul
        className={clsx("main-nav", {
          "menu-active": showMenu,
        })}
      >
        <li>
          <a href="#" className="nav-links">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            My Orders
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            Cart
          </a>
        </li>
      </ul>
      <span className="navbar-toggle">
        <button onClick={handleGG} className="link-button">
          Expand
        </button>
      </span>
    </nav>
  );
}

export default App;
