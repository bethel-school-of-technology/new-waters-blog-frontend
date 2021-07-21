import React from "react";
import {
  TextareaAutosize,
  TextField,
  Typography,
  Box as MuiBox,
} from "@material-ui/core";
import styled from "styled-components";
import MessageType from "../components/MessageType";

const SpacingDiv = styled.div`
  padding: 0.5rem;
`;

const Box = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 1rem;
`;

const HomePage = () => {
  return (
    <>
      {/* <MessageType /> */}
      <Box>
        <Typography>New Waters Blog</Typography>
        <SpacingDiv />
        <TextField
          id="paragraph-box"
          label="What is Happening"
          multiline
          rows={5}
          // defaultValue="Default Value"
          variant="outlined"
        />
        <SpacingDiv></SpacingDiv>
        <TextField
          id="paragraph-box"
          label="What is Happening"
          multiline
          rows={5}
          // defaultValue="Default Value"
          variant="outlined"
        />
      </Box>
    </>
  );
};

export default HomePage;
