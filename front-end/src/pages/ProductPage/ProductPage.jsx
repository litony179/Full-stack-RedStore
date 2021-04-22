import React from 'react';
import NavBar from '../../components/Utilities/NavBar/NavBar';
import ProductFilter from '../../components/ProductsPage/ProductFilter/ProductFilter';
import ProductGallery from '../../components/ProductsPage/ProductGallery/ProductGallery';
import Footer from '../../components/Utilities/Footer/Footer';
import PageToggle from '../../components/Utilities/PageToggle/PageToggle';
import './ProductPage.css';

const productPage = () => {
    return(
        <div className="productPage-container">
            <div className="PP-navBar-container"><NavBar></NavBar></div>
            <div><ProductFilter></ProductFilter></div>
            <div><ProductGallery></ProductGallery></div>
            <div><PageToggle></PageToggle></div>
            <div><Footer></Footer></div>
        </div>
    );
}

export default productPage