import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RecentProducts.css';
import Product from '../../Utilities/Product/Product';
import MessageBox from "../../Utilities/LoadingBox/LoadingBox";
import LoadingBox from "../../Utilities/MessageBox/MessageBox";

function RecentProducts () {
    const [recentProducts, setRecentProducts] = useState([]);
    // This hook is for when the network is slow and needs to load.
    const [loader, setLoader] = useState(false);
    // This is an error message whe you cannot load products
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try{
                setLoader(true);
                const { data } = await axios.get('/api/recentProducts');
                setLoader(false);
                setRecentProducts(data);
            } catch(err) {
                setError(err.message);
                setLoader(false);
            }
        }
        fetchData();
    }, []);

    return(
        <div className="recentProducts-container">
            <h2 className="recentProducts-title">Recent Products</h2>
            <div className="row center">
                {loader ? <LoadingBox></LoadingBox> : error ? <MessageBox>{error}</MessageBox> : 
                    
                        recentProducts.map((featuredProduct) => (
                            <Product key={featuredProduct._id} product={featuredProduct}></Product>
                        ))
                }
                    
                {loader ? <LoadingBox></LoadingBox> : error ? <MessageBox>{error}</MessageBox> :  
                        recentProducts.map((recentProduct) => (
                            <Product key={recentProduct._id} product={recentProduct}></Product>
                        ))
                }
            </div>
        </div>
    

    );
}

export default RecentProducts;