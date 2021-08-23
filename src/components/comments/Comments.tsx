import * as React from "react";
import { useContext } from "react";
import Context from "./Context";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import { Typography, IconButton } from "@material-ui/core";
import styled from "styled-components";

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const Comments = ({ item }: { item: string }) => {
  const { Dispatch } = useContext(Context);
  
  return (
    <div>
      <CenterDiv>
        <Typography variant="h5">{item}</Typography>
        <IconButton
          onClick={() => Dispatch({ type: "REMOVE", itemToBeDeleted: item })}
        >
          <ClearOutlinedIcon />
        </IconButton>
      </CenterDiv>
    </div>
  );
};

export default Comments;
