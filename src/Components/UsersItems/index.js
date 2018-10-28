import React from "react";
import itemsMap from "../../constants/items";

const UserItems = ({ items }) => (
  <section className="level is-mobile" id="items">
    {items.map((item, i) => (
      <div className="level-item has-text-centered">
        <img
          className="itemArt"
          src={`${itemsMap[item.ID]}`}
          alt="item"
          key={i}
        />
      </div>
    ))}
  </section>
);

export default UserItems;
