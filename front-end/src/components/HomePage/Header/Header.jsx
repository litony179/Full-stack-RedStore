import React , { useState } from 'react';
import './Header.css';
import NavBar from '../../Utilities/NavBar/NavBar';



function Header(){
    return(
        <div>
            <div className="banner-container">
                <NavBar></NavBar>
                <div className="row ">
                    <div className="col-2">
                        <h1>Give your workout <br></br>a new style!</h1>
                        <p>Success isn't always about greatness. It's about consistency. consistent <br></br> hard work gains sucess. Greatness will follow!</p>
                        <a className="btn" href="/products">Explore now</a>
                    </div>
                    <div class="col-2">
                        <img src="./images/image1.png" alt="banner-pic"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Header