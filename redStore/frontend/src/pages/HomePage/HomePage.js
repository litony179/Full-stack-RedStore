import React from 'react';
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

const homePage = () => {
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
        </div>
    );
}

export default homePage;