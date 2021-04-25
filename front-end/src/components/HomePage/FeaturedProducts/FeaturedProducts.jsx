// The useState hook manages the states of your page.
// The useEffect hook manages what those states do after they are rendered onto the page
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./FeaturedProducts.css";
import Product from "../../Utilities/Product/Product";
import MessageBox from "../../Utilities/LoadingBox/LoadingBox";
import LoadingBox from "../../Utilities/MessageBox/MessageBox";
import { featuredListProducts } from "../../../actions/HomePage/productActions";

function FeaturedProducts() {
  const dispatch = useDispatch();
  const featuredProductList = useSelector((state) => state.featuredProductList);
  const { loader, error, products } = featuredProductList;

  useEffect(() => {
    dispatch(featuredListProducts());
  }, [dispatch]);

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
