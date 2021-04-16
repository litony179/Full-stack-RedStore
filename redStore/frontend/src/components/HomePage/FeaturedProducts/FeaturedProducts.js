import React, { Component } from 'react';
import './FeaturedProducts.css';
import featuredProductData from '../../../data/data';
import Product from '../../Utilities/Product/Product';

class featuredProducts extends Component {
    render() {
        return(
            <div className="featuredProducts-container">
                <h2 className="featuredProducts-title">Featured Products</h2>
                <div className="row center">
                    {
                        featuredProductData.featuredProducts.map((product) => (
                            <Product key={product._id} product={product}></Product>
                        ))
                    }
                </div>
            </div>
        );
    }

}

export default featuredProducts;