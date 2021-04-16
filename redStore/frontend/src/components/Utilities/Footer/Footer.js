import React from 'react';
import './Footer.css';
import playStore from '../../../images/play-store.png'
import logoWhite from '../../../images/logo-white.png'
import appStore from '../../../images/app-store.png'

const footer = () => {
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="row footer-row">
                    <div className="footer-col-1">
                        <h3>Download Our App</h3>
                        <p>Download our app for Android and IOS mobile phone</p>
                        <div className="app-logo">
                            <img src={playStore} alt="play-store-pic" />
                            <img src={appStore} alt="app-store-pic" />
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <img src={logoWhite} alt="store-logo"/>
                        <p>Our purpose is to sustainability make the pleasure and benifits of sports accessible to the masses</p>
                    </div>
                    <div className="footer-col-3">
                        <h3>Useful links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Posts</li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>
                        </ul>
                    </div>
                    <div className="footer-col-4">
                        <h3>Follow Us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default footer;