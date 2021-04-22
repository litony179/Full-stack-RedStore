import React, {Component} from 'react';
import './Testimonials.css';
import Testimonal from '../../Utilities/Testimonal/Testimonial';
import testimonialData from '../../../data/data';

class testimonials extends Component {
    render(){
        return(
            <div className="testimonials-container">
                <div className="row testimonial-row">
                    {
                        testimonialData.TestimonialsInfo.map((testimonials) => (
                            <Testimonal key={testimonials._id} 
                                testimonialRating={testimonials.rating} 
                                testimonialMsg={testimonials.message} 
                                testimonialName={testimonials.name}
                                testimonialImage={testimonials.image} />
                        ))
                    }
                </div>
            </div>
        ); 
    }
}

export default testimonials;