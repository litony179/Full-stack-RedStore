// The useState hook manages the states of your page.
// The useEffect hook manages what those states do after they are rendered onto the page
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FeaturedProducts.css";
import Product from "../../Utilities/Product/Product";
import MessageBox from "../../Utilities/LoadingBox/LoadingBox";
import LoadingBox from "../../Utilities/MessageBox/MessageBox";

function FeaturedProducts() {
  // This is a basic form of a react hook
  const [products, setProducts] = useState([]);
  // This hook is for when the network is slow and needs to load.
  const [loader, setLoader] = useState(false);
  // This is an error message whe you cannot load products
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoader(true);
        const { data } = await axios.get("/api/products");
        setLoader(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoader(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="featuredProducts-container">
      <h2 className="featuredProducts-title">Featured Products</h2>
      {loader ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox varient="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      )}
    </div>
  );
}

export default FeaturedProducts;
