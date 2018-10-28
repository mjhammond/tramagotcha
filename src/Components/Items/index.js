import React from "react";
import "./items.css";

const ItemList = ({ className, items, closeItemDrawer }) => (
  <div className={`items ${className}`}>
    <span className="bobsBurgers" onClick={event => closeItemDrawer(event)}>
      <i className="fas fa-bars" />
    </span>
    {items.map((item, i) => (
      <span key={i} className="item">
        {item.itemName}
      </span>
    ))}
  </div>
);

export default ItemList;
