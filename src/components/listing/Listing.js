import React from "react";
import ListItem from "./ListItem";

function Listing ({items}) {
    return (
        <div className="item-list">
            {items.map(item => 
              <ListItem key={item.listing_id} item={item} />
            )}
        </div>
    )
}

Listing.defaultProps = {
    items: []
}

export default Listing;
