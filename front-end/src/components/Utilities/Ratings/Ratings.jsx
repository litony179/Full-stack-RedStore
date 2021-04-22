import React from 'react';
import './Ratings.css';

const ratings = (props) => {
    // This destructures the 
    const {rating, numReviews} = props;
    return(
        <div className="rating">
            <span><i class={rating >= 1 ? "fas fa-star" : rating >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i></span>
            <span><i class={rating >= 2 ? "fas fa-star" : rating >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i></span>
            <span><i class={rating >= 3 ? "fas fa-star" : rating >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i></span>
            <span><i class={rating >= 4 ? "fas fa-star" : rating >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i></span>
            <span><i class={rating >= 5 ? "fas fa-star" : rating >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i></span>
            <span>{numReviews == null ? "" : numReviews + ' reviews'}</span>
        </div>
    );
}

export default ratings;