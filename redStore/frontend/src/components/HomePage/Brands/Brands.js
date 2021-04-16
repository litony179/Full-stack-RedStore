import React from 'react';
import './Brands.css';
import logoGodrej from '../../../images/logo-godrej.png'
import logoOppo from '../../../images/logo-oppo.png'
import logoCocaCola from '../../../images/logo-coca-cola.png'
import logoPayPal from '../../../images/logo-paypal.png'
import logoPhilips from '../../../images/logo-philips.png'

const brands = () => {
    return(
        <div className="brands">
            <div className="brands-container">
                <div className="row row-brand">
                    <div className="brand col-5"><img src={logoGodrej} alt="brand-1" /></div>
                    <div className="brand col-5"><img src={logoOppo} alt="brand-2" /></div>
                    <div className="brand col-5"><img src={logoCocaCola} alt="brand-3" /></div>
                    <div className="brand col-5"><img src={logoPayPal} alt="brand-4" /></div>
                    <div className="brand col-5"><img src={logoPhilips} alt="brand-5" /></div>
                </div>
            </div>
        </div>
    );
}

export default brands;