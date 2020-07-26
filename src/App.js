import React from "react";
import "./App.css";

function App() {
  return (
    <nav className="navbar">
      <span className="title">eCommerce Site</span>
      <ul className="main-nav">
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
      <span className="navbar-toggle">Expand</span>
    </nav>
  );
}

export default App;
