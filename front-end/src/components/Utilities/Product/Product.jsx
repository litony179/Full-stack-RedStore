import React from "react";
import { Link } from "react-router-dom";
import Ratings from "../Ratings/Ratings";
import "./Product.css";

const product = (props) => {
  const { product } = props;
  return (
    <div key={product._id} className="homePage-card">
      <Link to={`/products/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name}></img>
      </Link>
      <div className="homePage-card-body">
        <Link to={`/products/${product._id}`}>
          <h4>{product.name}</h4>
        </Link>
        <Ratings
          rating={product.rating}
          numReviews={product.numReviews}
        ></Ratings>
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
};

export default product;
