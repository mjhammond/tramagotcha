import React from "react";
import itemsMap from "../../constants/items";
import "./useritems.css";

const UserItems = ({ items }) => (
  <nav className="level is-mobile" id="items">
    {items.map((item, i) => (
      <div className="level-item has-text-centered" id="woop">
        <img
          className="itemArt"
          src={`${itemsMap[item.ID]}`}
          alt="item"
          key={i}
        />
      </div>
    ))}
  </nav>
);

export default UserItems;
