import React from 'react';
import './offer.css';
import exclusive from '../../../images/exclusive.png'

const offer = () => {
    return(
        <div className="offer">
            <div className="row">
                <div className="col-2">
                    <img className="offer-img" src={exclusive} alt="exclusive-pic"></img>
                </div>
                <div className="col-2">
                    <p>Exclusively Available on RedStore</p>
                    <h1>Smart Band 4</h1>
                    <small>The Xiao Mi smart band 4 features a  39.9% larger (than Xiao Mi Band 3) AMOLED color full-touch display with adjustible brightness, so everything is as clear as it can be.</small>
                    <a className="btn offer-btn" href="">Buy now</a>
                </div>
            </div>
        </div>
    );
}

export default offer;