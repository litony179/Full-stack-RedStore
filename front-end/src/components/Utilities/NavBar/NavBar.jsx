import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { signout } from "../../../actions/SignInCardPage/userActions";
import "./NavBar.css";

function NavBar() {
  const [openNavToggle, setOpenNavToggle] = useState(false);
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  const dispatch = useDispatch();
  

  const signoutHandler = () => {
    dispatch(signout());
  }
  
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
            {
              userInfo ? (
                <div className="dropdown">
                  <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i>{' '} </Link>
                  <ul className="dropdown-contents">
                    <Link onClick={signoutHandler}>Sign Out</Link>
                  </ul>
                </div>
              ) : (
                <Link className="btn signup-btn" to="/signin">
                  Sign In
                </Link>
              )
            }
          </li>
          <li>
            <Link className="shopping-cart" to="/cart">
              <i className="fas fa-shopping-cart"></i>
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
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
