import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import './ProductDetailsPage.css'
import data from '../../data/data'
import RecentData from '../../data/recentData'
import RecommendedData from '../../data/recommendedData'
import NavBar from '../../components/Utilities/NavBar/NavBar'
import Footer from '../../components/Utilities/Footer/Footer'
import RecommendedProducts from '../../components/ProductDetailsPage/RecommendedProducts/RecommendedProducts'
import SingleProductDetails from '../../components/ProductDetailsPage/SingleProductDetails/SingleProductDetails'

const ProductDetailsPage = (props) => {
    // The 'props.match.params.id' is the id that the user enters when they click on the item
    const RecentProductID = RecentData.RecentProducts.find((x) => x._id === props.match.params.id);
    const RecommendedProductID = RecommendedData.recommendedProducts.find((x) => x._id === props.match.params.id);
    const productID = data.products.find((x) => x._id === props.match.params.id );
    
    if(!productID && !RecentProductID && !RecommendedProductID){
        return(
            <div>Product Not Found</div>
        )
    } else if(RecentProductID) {
        return (
            <div>
                <div className="PDP-navbar-container">
                    <NavBar></NavBar>
                </div>
                <SingleProductDetails details={RecentProductID}></SingleProductDetails>
                <RecommendedProducts></RecommendedProducts>
                <Footer className="PDP-footer"></Footer>
            </div>
        );
    } else if(RecommendedProductID){
        return (
            <div>
                <div className="PDP-navbar-container">
                    <NavBar></NavBar>
                </div>
                <SingleProductDetails details={RecommendedProductID}></SingleProductDetails>
                <RecommendedProducts></RecommendedProducts>
                <Footer className="PDP-footer"></Footer>
            </div>
        );
    } else if(productID){
        return (
            <div>
                <div className="PDP-navbar-container">
                    <NavBar></NavBar>
                </div>
                <SingleProductDetails details={productID}></SingleProductDetails>
                <RecommendedProducts></RecommendedProducts>
                <Footer className="PDP-footer"></Footer>
            </div>
        );
    }

    

    
}

export default ProductDetailsPage;
