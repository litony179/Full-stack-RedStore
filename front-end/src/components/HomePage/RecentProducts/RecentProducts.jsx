import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import './RecentProducts.css';
import recentProductData from '../../../data/recentData';
import Product from '../../Utilities/Product/Product';

function RecentProducts () {
    // const [recentProducts, setRecentProducts] = useState([])

    return(
        <div className="recentProducts-container">
            <h2 className="recentProducts-title">Recent Products</h2>
            <div className="row center">
                {
                    recentProductData.RecentProducts.map((featuredProduct) => (
                        <Product key={featuredProduct._id} product={featuredProduct}></Product>
                    ))
                }
                {
                    recentProductData.RecentProducts.map((recentProduct) => (
                        <Product key={recentProduct._id} product={recentProduct}></Product>
                    ))
                }
            </div>
        </div>
    

    );
}

export default RecentProducts;