import React from 'react';
import './Brands.css';

const brands = () => {
    return(
        <div className="brands">
            <div className="brands-container">
                <div className="row row-brand">
                    <div className="brand col-5"><img src="./images/logo-godrej.png" alt="brand-1" /></div>
                    <div className="brand col-5"><img src="./images/logo-oppo.png" alt="brand-2" /></div>
                    <div className="brand col-5"><img src="./images/logo-coca-cola.png" alt="brand-3" /></div>
                    <div className="brand col-5"><img src="./images/logo-paypal.png" alt="brand-4" /></div>
                    <div className="brand col-5"><img src="./images/logo-philips.png" alt="brand-5" /></div>
                </div>
            </div>
        </div>
    );
}

export default brands;