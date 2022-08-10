import React from "react";

function ListItem({ item }) {
  if (item.state === "removed") return;
  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">
          {item.title.length > 50 ? 
          item.title.slice(0, 50) + "..." :
          item.title}
        </p>
        {item.currency_code === "USD" || item.currency_code === "EUR" ? (
          <p className="item-price">
            {item.currency_code === "USD" ? "$" : "€"}
            {item.price}
          </p>
        ) : (
          <p className="item-price">
            {item.price} {item.currency_code}
          </p>
        )}
        <p className={
            "item-quantity " +
            (item.quantity <= 10 ? "level-low" :
             item.quantity <= 20 ? "level-medium" : 
                                   "level-high")
          }
        >
          {item.quantity} left
        </p>
      </div>
    </div>
  );
}

export default ListItem;
