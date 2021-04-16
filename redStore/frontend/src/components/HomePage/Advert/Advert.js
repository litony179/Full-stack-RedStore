import React from 'react';
import './Advert.css';
import promo7 from '../../../images/promo7.jpg'
import promo8 from '../../../images/promo8.jpg'

const advert = () => {
    return(
        <div className="advert-layout-container">
            <div className="item">
                <img src={promo7} alt="shop-women-pic"></img>
                <div className="content left">
                    <span>Exclusive Sales</span>
                    <h3>Spring Collection</h3>
                    <a className="btn advert-btn" href="">View Collection</a>
                </div>
            </div>
            <div className="item">
                <img src={promo8} alt="shop-women-pic"></img>
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