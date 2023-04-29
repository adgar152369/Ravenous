import React from "react";
import './BusinessList.css';
import Business from "../Business/Business";

function BusinessList({ businesses }) {

  return (
    <div className="BusinessList">
      {businesses ? (
        businesses.map(business => (
          <Business key={business.id} business={business} />
        ))
      ) : (
        <p></p>
      )}
    </div>
  )
}

export default BusinessList;