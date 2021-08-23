import React, { useContext, useState } from "react";
import { TextField } from "@material-ui/core";
import Context from "./Context";
import styled from "styled-components";

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  // background: red;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 5px 40px;
  border-radius: 20px;
  margin: 10px 0px;
  cursor: pointer;
  }
`;

const AddComment = () => {
  const [item, setItem] = useState("");
  const { Dispatch } = useContext(Context);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    Dispatch({ type: "ADD", item });
    setItem("");
  };

  return (
    <>
      <CenterDiv>
        <form onSubmit={handleSubmit}>
          <TextField
            multiline
            fullWidth
            margin="normal"
            autoFocus
            placeholder="Leave your thoughts here"
            value={item}
            variant="outlined"
            onChange={(e) => setItem(e.target.value)}
            minRows={10}
            type=" textfield"
          />
          <Button>Submit</Button>
        </form>
      </CenterDiv>
    </>
  );
};

export default AddComment;
