import React, { useState } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import './NavBar.css';

function NavBar() {

    const [openNavToggle, setOpenNavToggle] = useState(false);
    return (
        <div className="nav-container">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" width="125px" alt="store-logo"></img>
                </div>
                <ul className="nav-links" style={{transform: openNavToggle ? "translateX(0)" : ""}}>
                    <div onClick={() => setOpenNavToggle(!openNavToggle)}>
                        <i style={{transform: !openNavToggle ? "translateX(-700px)" : ""}}className="close-icon fas fa-times"></i>
                    </div>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/account">Account</a></li>
                    <li><a className="btn signup-btn" href="/signup">Sign Up</a></li>
                    <li><a className="shopping-cart" href="/cart"><i className="fas fa-shopping-cart"></i></a></li>
                    
                </ul>
                
                
                
                <i onClick={() => setOpenNavToggle(!openNavToggle)} className="bars-icon fas fa-bars"></i>
            </nav>
        </div>
    );
}

export default NavBar;
