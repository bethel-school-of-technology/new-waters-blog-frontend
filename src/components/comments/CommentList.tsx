import React, { useContext } from "react";
import ItemsContext from "./Context";
import Item from "./Comments";

const ItemList = () => {
  const { items } = useContext(ItemsContext);

  return (
    <div className="items-container">
      <ul>
        {items.map((item) => (
          <li>
            <Item key={item} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
