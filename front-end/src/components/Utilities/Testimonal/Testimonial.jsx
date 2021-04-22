import React from 'react';
import './Testimonial.css';
import Ratings from '../Ratings/Ratings';

const testimonial = (props) => {
    const {testimonialImage, testimonialRating, testimonialMsg, testimonialName} = props;
    return(
        <div className="testimonial">
            <i class="fas fa-quote-left"></i>
            <p>{testimonialMsg}</p>
            <Ratings className="rating" rating={testimonialRating} numReview={testimonialRating.numReview}></Ratings>
            <img src={testimonialImage} alt="user-pic"></img>
            <h3>{testimonialName}</h3>
        </div>
    );
}

export default testimonial;
