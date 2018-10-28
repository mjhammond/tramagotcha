import React from "react";
import "./items.css";

const ItemList = ({ className, items }) => (
  <div className={`items ${className}`}>
    {items.map((item, i) => (
      <span key={i} className="item">
        {item.itemName}
      </span>
    ))}
  </div>
);

export default ItemList;
