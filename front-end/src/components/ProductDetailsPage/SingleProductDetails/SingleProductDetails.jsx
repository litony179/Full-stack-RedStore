import React, { useState } from "react";
import Ratings from "../../Utilities/Ratings/Ratings";
import "./SingleProductDetails.css";

function SingleProductDetails(props) {
  const { details } = props;
  const PDImage1 = details.imagePD1;
  const PDImage2 = details.imagePD2;
  const PDImage3 = details.imagePD4;
  const PDImage4 = details.imagePD3;
  const PD = { PDImage1, PDImage2, PDImage3, PDImage4 };
  const [isPDImageShown, setPDImageShown] = useState(PD.PDImage1);

  return (
    <div className="singleProductDetails-container">
      <div className="row">
        <div className=" col-2">
          <div className="hero-PD-img">
            <img src={isPDImageShown} alt={details.name} width="100%"></img>
          </div>

          <div className="small-PD-img-row">
            <div className="small-PD-img-col">
              <img
                onClick={() => setPDImageShown(PD.PDImage1)}
                src={details.imagePD1}
                alt={details.name}
                width="100%"
              />
            </div>
            <div className="small-PD-img-col">
              <img
                onClick={() => setPDImageShown(PD.PDImage2)}
                src={details.imagePD2}
                alt={details.name}
                width="100%"
              />
            </div>
            <div className="small-PD-img-col">
              <img
                onClick={() => setPDImageShown(PD.PDImage3)}
                src={details.imagePD3}
                alt={details.name}
                width="100%"
              />
            </div>
            <div className="small-PD-img-col">
              <img
                onClick={() => setPDImageShown(PD.PDImage4)}
                src={details.imagePD4}
                alt={details.name}
                width="100%"
              />
            </div>
          </div>
        </div>
        <div className="col-2">
          <h1>{details.name}</h1>
          <h4>${details.price}</h4>
          <div>
            {details.inventory > 0 ? (
              <span className="success">In Stock</span>
            ) : (
              <span className="error">Out of Stock</span>
            )}
          </div>
          <div className="ratings">
            <Ratings
              rating={details.rating}
              numReviews={details.numReviews}
            ></Ratings>
          </div>
          <select name="sizes">
            <option disabled selected>
              Select Size
            </option>
            <option>XXL</option>
            <option>XL</option>
            <option>Large</option>
            <option>Medium</option>
            <option>Small</option>
          </select>
          <input type="number" min="1" max="9999" defaultValue="1" />
          <a href="" className="btn singleProductDetails-btn">
            Add To Cart
          </a>
          <h3>
            Product Details <i class="fas fa-indent"></i>
          </h3>
          <p>{details.details}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleProductDetails;
