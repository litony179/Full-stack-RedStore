import React from 'react';
import './Footer.css';

const footer = () => {
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="row footer-row">
                    <div className="footer-col-1">
                        <h3>Download Our App</h3>
                        <p>Download our app for Android and IOS mobile phone</p>
                        <div className="app-logo">
                            <img src="/images/play-store.png" alt="play-store-pic" />
                            <img src="/images/app-store.png" alt="app-store-pic" />
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <img src="/images/logo-white.png" alt="store-logo"/>
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