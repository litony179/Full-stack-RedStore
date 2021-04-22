import React, { Component } from 'react';
import './RecommendedProducts.css';
import RecommendedProductData from '../../../data/recommendedData';
import Product from '../../Utilities/Product/Product';

class recommendedProducts extends Component {
    render() {
        return(
            <div className="recommendedProducts-container">
                <h2 className="recommendedProducts-title">Recommended Products</h2>
                <div className="row center">
                    {
                        RecommendedProductData.recommendedProducts.map((product) => (
                            <Product key={product._id} product={product}></Product>
                        ))
                    }
                </div>
            </div>
        );
    }
    
}

export default recommendedProducts
