import { Typography } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ItemsContext from "./Context";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
`;

const AddComment = () => {
  const [item, setItem] = useState("");
  const { itemsDispatch } = useContext(ItemsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    itemsDispatch({ type: "ADD", item });
    setItem("");
  };

  return (
    <div>
      <Typography color="primary" variant="h5" align="center">
        Comment Below
      </Typography>
      <CenterDiv>
        <form onSubmit={handleSubmit}>
          <Column>
            <input
              style={{ marginBottom: 5 }}
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <button>
              <Button color="secondary">Submit</Button>
            </button>
          </Column>
        </form>
      </CenterDiv>
    </div>
  );
};

export default AddComment;
