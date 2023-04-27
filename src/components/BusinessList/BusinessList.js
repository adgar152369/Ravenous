import React from "react";
import './BusinessList.css';
import Business from "../Business/Business";

function BusinessList(props) {
  return (
    <div className="BusinessList">
      {props.businessList.map(business => {
        return <Business key={business.name} business={business} />
      })}
    </div>
  )
}

export default BusinessList;