import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./RecentProducts.css";
import Product from "../../Utilities/Product/Product";
import MessageBox from "../../Utilities/LoadingBox/LoadingBox";
import LoadingBox from "../../Utilities/MessageBox/MessageBox";
import { recentListProducts } from "../../../actions/HomePage/productActions";

function RecentProducts() {
  const dispatch = useDispatch();
  const recentProductList = useSelector((state) => state.recentProductList);
  const { loader, error, recentProducts } = recentProductList;

  useEffect(() => {
    dispatch(recentListProducts());
  }, [dispatch]);

  return (
    <div className="recentProducts-container">
      <h2 className="recentProducts-title">Recent Most Popular Products</h2>
      <div className="row center">
        {loader ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox>{error}</MessageBox>
        ) : (
          recentProducts.slice(4,12).map((recentProduct) => (
            <Product key={recentProduct._id} product={recentProduct}></Product>
          ))
        )}
      </div>
    </div>
  );
}

export default RecentProducts;
