import React from "react";
import './Business.css';

function Business({business}) {
  return (
    <div className="Business">
      <div className="image-container">
        <img src={business.image_url} alt='' />
      </div>
      <a href={business.url} target="_blank"><h2>{business.name}</h2></a>
      <div className="Business-information">
        <div className="Business-address">
          <p>{business.location.display_address[0]}</p>
          <p>{business.location.display_address[1]}</p>
        </div>
        <div className="Business-reviews">
          <h3>{business.categories[0].title}</h3>
          <h3 className="rating">{business.rating} stars</h3>
          <p>{business.review_count} ratings</p>
        </div>
      </div>
    </div>
  );
}

export default Business;