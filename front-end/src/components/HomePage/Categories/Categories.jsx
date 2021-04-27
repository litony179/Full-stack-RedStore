import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';



function Categories() {
    
    const [isCategoryClothesShown, setCategoryClothesShown] = useState(false);
    const [isCategoryShoesShown, setCategoryShoesShown] = useState(false);
    const [isCategoryAccessoriesShown, setCategoryAccessoriesShown] = useState(false);

    

    return(
        <div>
            <div>
                <div className="categories">
                    <div className="categories-wrapper">
                        <div className="row">
                            <div className="category-cards">
                                <div className="hover-container">
                                    <div className="image-container hover">
                                        <img onMouseEnter={() => setCategoryClothesShown(true)} onMouseLeave={() => setCategoryClothesShown(false)} src="images/category-1.jpg" alt="category-pic"></img>
                                        {isCategoryClothesShown && (
                                            <div onMouseEnter={() => setCategoryClothesShown(true)} className="button-container"> 
                                                <Link className="btn category-btn" to="/products">shop men</Link>
                                                <Link className="btn category-btn" to="/products">shop women</Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="info-container">
                                    <hr></hr>
                                    <h1>Our Clothes <br></br> Collection</h1>
                                </div> 
                            </div>
                            <div className="category-cards">
                                <div className="hover-container">
                                    <div className="image-container hover">
                                        <img onMouseEnter={() => setCategoryShoesShown(true)} onMouseLeave={() => setCategoryShoesShown(false)} src="images/category-2.jpg" alt="category-pic"></img>
                                        {isCategoryShoesShown && (
                                            <div onMouseEnter={() => setCategoryShoesShown(true)} className="button-container"> 
                                                <Link className="btn category-btn" to="/products">shop men</Link>
                                                <Link className="btn category-btn" to="/products">shop women</Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="info-container">
                                    <hr></hr>
                                    <h1>Our Shoes <br></br> Collection</h1>
                                </div> 
                                
                            </div>
                            <div className="category-cards">
                                <div className="hover-container">
                                    <div className="image-container hover">
                                        <img onMouseEnter={() => setCategoryAccessoriesShown(true)} onMouseLeave={() => setCategoryAccessoriesShown(false)} src="images/category-3.jpg" alt="category-pic"></img>
                                        {isCategoryAccessoriesShown && (
                                            <div onMouseEnter={() => setCategoryAccessoriesShown(true)} className="button-container"> 
                                                <Link className="btn category-btn" to="/products">shop men</Link>
                                                <Link className="btn category-btn" to="/products">shop women</Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="info-container">
                                    <hr></hr>
                                    <h1>Our Accessories <br></br> Collection</h1>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categories;