import React from "react";
import Star from "./Star";

function Stars({ count }) {
  count = count > 5 ? count = 0 : 
          count < 1 ? count = 0 :
          count;
  
  return (
    <ul className="card-body-stars u-clearfix">
        {[...Array(count)].map((item, index) => <Star key={index} />)}
    </ul>
  )
}

Stars.defaultProps = {
  count: 0
}

export default Stars;