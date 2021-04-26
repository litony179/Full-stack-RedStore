import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./ProductDetailsPage.css";
import RecentData from "../../data/recentData";
import RecommendedData from "../../data/recommendedData";
import NavBar from "../../components/Utilities/NavBar/NavBar";
import Footer from "../../components/Utilities/Footer/Footer";
import RecommendedProducts from "../../components/ProductDetailsPage/RecommendedProducts/RecommendedProducts";
import SingleProductDetails from "../../components/ProductDetailsPage/SingleProductDetails/SingleProductDetails";
import LoadingBox from "../../components/Utilities/LoadingBox/LoadingBox";
import MessageBox from "../../components/Utilities/MessageBox/MessageBox";
import {
  detailsFeatureProduct,
} from "../../actions/ProductDetailsPage/ProductDetailsActions";

const ProductDetailsPage = (props) => {
  // The 'props.match.params.id' is the id that the user enters when they click on the item
  //   const RecentProductID = RecentData.RecentProducts.find(
  //     (x) => x._id === props.match.params.id
  //   );
  //   const RecommendedProductID = RecommendedData.recommendedProducts.find(
  //     (x) => x._id === props.match.params.id
  //   );

  // Actions and reducers for displaying freatured product details
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loader, error, product } = productDetails;
  const productId = props.match.params.id;
  

 

  useEffect(() => {
    dispatch(detailsFeatureProduct(productId));
    
  }, [dispatch, productId]);

  if(productId){
    console.log("recent product id is " + productId);
    return (
      <div>
        {loader ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox varient="danger">{error}</MessageBox>
        ) : (
          <div>
            <div className="PDP-navbar-container">
              <NavBar></NavBar>
            </div>
            <SingleProductDetails details={product}></SingleProductDetails>
            <RecommendedProducts></RecommendedProducts>
            <Footer className="PDP-footer"></Footer>
          </div>
        )}
      </div>
    );
  };
};

export default ProductDetailsPage;
