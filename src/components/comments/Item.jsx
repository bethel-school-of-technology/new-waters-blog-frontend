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
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import { Button, Typography } from "@material-ui/core";
import styled from "styled-components";

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
`;

const Item = ({ item }) => {
  const { itemsDispatch } = useContext(ItemsContext);

  return (
    <div>
      <CenterDiv>
        <Typography variant="h3">{item}</Typography>
        <Button>
          <button
            onClick={() =>
              itemsDispatch({ type: "REMOVE_ITEM", itemToBeDeleted: item })
            }
          >
            <ClearOutlinedIcon />
          </button>
        </Button>
      </CenterDiv>
    </div>
  );
};

export default Item;
