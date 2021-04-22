import React from 'react';
import './ProductFilter.css'

const productFilter = () => {
    return(
        <div className="productFilter-container">
            <h2>All Products</h2>
            <select>
                <option disabled selected>Categories</option>
            </select>
        </div>
        
    );
}

export default productFilter