import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './HomePage.css';
import Header from '../../components/HomePage/Header/Header';
import Categories from '../../components/HomePage/Categories/Categories';
import FeaturedProducts from '../../components/HomePage/FeaturedProducts/FeaturedProducts';
import RecentProducts from '../../components/HomePage/RecentProducts/RecentProducts';
import Advert from '../../components/HomePage/Advert/Advert';
import Offer from '../../components/HomePage/Offer/offer';
import Testimonials from '../../components/HomePage/Testimonials/Testimonials';
import Brands from '../../components/HomePage/Brands/Brands';
import Footer from '../../components/Utilities/Footer/Footer';
import SingleProductDetails from '../../components/ProductDetailsPage/SingleProductDetails/SingleProductDetails'

const homePage = (props) => {
    return(
        <div>
            <Header></Header>
            <Categories></Categories>
            <FeaturedProducts></FeaturedProducts>
            <Advert></Advert>
            <RecentProducts></RecentProducts>
            <Offer></Offer>
            <Testimonials></Testimonials>
            <Brands></Brands>
            <Footer></Footer>
            <BrowserRouter>
            <Route path={`${props.match.path}/HomePage/:id`} component={SingleProductDetails}></Route>
            </BrowserRouter>
        </div>

        
    );
}

export default homePage;