import React from 'react';
import './ProductGallery.css';
import Product from '../../Utilities/Product/Product';
import Data from '../../../data/data';
import RecentProductsData from '../../../data/recentData';
import RecommendedProductData from '../../../data/recommendedData';

const productGallery = () => {
    return(
        <div className="product-gallery-container">
            {
                Data.products.map((product) => (
                    <Product key={product._id} product={product}></Product>
                ))
            }
            {
                RecentProductsData.RecentProducts.map((product) => (
                    <Product key={product._id} product={product}></Product>
                ))
            }
            {
                RecommendedProductData.recommendedProducts.map((product) => (
                    <Product key={product._id} product={product}></Product>
                ))
            }
        </div>
    );
}

export default productGallery