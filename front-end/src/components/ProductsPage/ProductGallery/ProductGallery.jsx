import React, { useEffect } from "react";
import "./ProductGallery.css";
import Product from "../../Utilities/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../../Utilities/LoadingBox/LoadingBox";
import MessageBox from "../../Utilities/MessageBox/MessageBox";
import { productsGallery } from "../../../actions/ProductsPage/ProductsActions";

function ProductGallery() {
  const dispatch = useDispatch();
  const productGallery = useSelector((state) => state.productGallery);
  const { loader, error, products } = productGallery;

  useEffect(() => {
    dispatch(productsGallery());
  }, [dispatch]);

  return (
    <div className="product-gallery-container">
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
      {/* {
                RecentProductsData.RecentProducts.map((product) => (
                    <Product key={product._id} product={product}></Product>
                ))
            }
            {
                RecommendedProductData.recommendedProducts.map((product) => (
                    <Product key={product._id} product={product}></Product>
                ))
            } */}
    </div>
  );
}

export default ProductGallery;
