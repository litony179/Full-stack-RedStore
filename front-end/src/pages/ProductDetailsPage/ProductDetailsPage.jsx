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
  detailsRecentProduct,
} from "../../actions/ProductDetailsPage/ProductDetailsActions";

const ProductDetailsPage = (props) => {
  // The 'props.match.params.id' is the id that the user enters when they click on the item
  //   const RecentProductID = RecentData.RecentProducts.find(
  //     (x) => x._id === props.match.params.id
  //   );
  //   const RecommendedProductID = RecommendedData.recommendedProducts.find(
  //     (x) => x._id === props.match.params.id
  //   );
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const recentProductDetails = useSelector(
    (state) => state.recentProductDetails
  );
  const { loader, error, product } = productDetails;
  const { recentLoader, recentError, recentProduct } = recentProductDetails;
  const productId = props.match.params.id;
  const recentProductId = props.match.params.id;

  useEffect(() => {
    dispatch(detailsFeatureProduct(productId));
    dispatch(detailsRecentProduct(recentProductId));
  }, [dispatch, productId, recentProductId]);

  if (recentProductId) {
    return (
      <div>
        {recentLoader ? (
          <LoadingBox></LoadingBox>
        ) : recentError ? (
          <MessageBox varient="danger">{error}</MessageBox>
        ) : (
          <div>
            <div className="PDP-navbar-container">
              <NavBar></NavBar>
            </div>
            <SingleProductDetails
              details={recentProduct}
            ></SingleProductDetails>
            <RecommendedProducts></RecommendedProducts>
            <Footer className="PDP-footer"></Footer>
          </div>
        )}
      </div>
    );
  }

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

//   if (!productID && !RecentProductID && !RecommendedProductID) {
//     return <div>Product Not Found</div>;
//   } else if (RecentProductID) {
//     return (
//       <div>
//         <div className="PDP-navbar-container">
//           <NavBar></NavBar>
//         </div>
//         <SingleProductDetails details={RecentProductID}></SingleProductDetails>
//         <RecommendedProducts></RecommendedProducts>
//         <Footer className="PDP-footer"></Footer>
//       </div>
//     );
//   } else if (RecommendedProductID) {
//     return (
//       <div>
//         <div className="PDP-navbar-container">
//           <NavBar></NavBar>
//         </div>
//         <SingleProductDetails
//           details={RecommendedProductID}
//         ></SingleProductDetails>
//         <RecommendedProducts></RecommendedProducts>
//         <Footer className="PDP-footer"></Footer>
//       </div>
//     );
//   } else if (productID) {
//     return (
//       <div>
//         <div className="PDP-navbar-container">
//           <NavBar></NavBar>
//         </div>
//         <SingleProductDetails details={productID}></SingleProductDetails>
//         <RecommendedProducts></RecommendedProducts>
//         <Footer className="PDP-footer"></Footer>
//       </div>
//     );
//   }
// };

export default ProductDetailsPage;
