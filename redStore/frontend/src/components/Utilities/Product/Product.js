import React from 'react';
import Ratings from '../Ratings/Ratings';
import './Product.css';

const product = (props) => {
    const {product} = props;
    return(
        <div key={product._id} className="homePage-card">
            <a href={`/product/${product._id}`}>
                <img className="medium" src={product.image} alt={product.name}></img>
            </a>
            <div className="homePage-card-body">
                <a href={`/product/${product._id}`}>
                    <h4>{product.name}</h4>
                </a>
                <Ratings rating={product.rating} numReviews={product.numReviews}></Ratings>
                <div className="price">
                    ${product.price}
                </div>
            </div>
        </div>

    );
}

export default product;









