import React from 'react';
import './Advert.css';

const advert = () => {
    return(
        <div className="advert-layout-container">
            <div className="item">
                <img src="./images/promo7.jpg" alt="shop-women-pic"></img>
                <div className="content left">
                    <span>Exclusive Sales</span>
                    <h3>Spring Collection</h3>
                    <a className="btn advert-btn" href="">View Collection</a>
                </div>
            </div>
            <div className="item">
                <img src="./images/promo8.jpg" alt="shop-women-pic"></img>
                <div className="content right">
                    <span>New Trending</span>
                    <h3>Designer Bags</h3>
                    <a className="btn advert-btn" href="">Shop Now</a>
                </div>
            </div>
        </div>
    );
}

export default advert;