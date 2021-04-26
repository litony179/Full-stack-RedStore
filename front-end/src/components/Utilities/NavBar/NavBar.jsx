import React, { useState } from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [openNavToggle, setOpenNavToggle] = useState(false);
  return (
    <div className="nav-container">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" width="125px" alt="store-logo"></img>
        </div>
        <ul
          className="nav-links"
          style={{ transform: openNavToggle ? "translateX(0)" : "" }}
        >
          <div onClick={() => setOpenNavToggle(!openNavToggle)}>
            <i
              style={{ transform: !openNavToggle ? "translateX(-700px)" : "" }}
              className="close-icon fas fa-times"
            ></i>
          </div>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link className="btn signup-btn" to="/signup">
              Sign Up
            </Link>
          </li>
          <li>
            <Link className="shopping-cart" to="/cart">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </li>
        </ul>

        <i
          onClick={() => setOpenNavToggle(!openNavToggle)}
          className="bars-icon fas fa-bars"
        ></i>
      </nav>
    </div>
  );
}

export default NavBar;
