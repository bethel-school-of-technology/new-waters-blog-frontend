// import React, { useContext } from "react";
// import ItemsContext from "./items-context";

// type RemoveItem = {
//   type: any
//   itemToBeDeleted: any
// }

// const Item: RemoveItem = { type: "REMOVE_ITEM", itemToBeDeleted: item as any } => {
//   const { itemsDispatch } = useContext(ItemsContext);

//   return (
//     <div>
//       <span>{item}</span>
//       <button
//         onClick={() =>
//           itemsDispatch(RemoveItem)
//         }
//       >
//         X
//       </button>
//     </div>
//   );
// };

// export default Item;

import React, { useContext } from "react";
import ItemsContext from "./items-context";

const Item = ({ item }) => {
  const { itemsDispatch } = useContext(ItemsContext);

  return (
    <div>
      <span>{item}</span>
      <button
        onClick={() =>
          itemsDispatch({ type: "REMOVE_ITEM", itemToBeDeleted: item })
        }
      >
        X
      </button>
    </div>
  );
};

export default Item;
