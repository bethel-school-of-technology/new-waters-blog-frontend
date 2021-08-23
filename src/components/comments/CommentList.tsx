import React, { useContext, useEffect } from "react";
import Context from "./Context";
import Comments from "./Comments";
import { Box, Typography } from "@material-ui/core";
import styled from "styled-components";

const borderProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 3,
};

const CommentStyling = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  // background-color: red;
`;

const CommentList = () => {
  const { items } = useContext(Context);
  const name = window.localStorage.getItem("username");

  useEffect(() => {
    console.log(name);
  }, []);

  return (
    <div className="itemsContainer">
      <ul>
        <CommentStyling>
          {items.map((item: string) => (
            <>
              <Box
                borderRadius={16}
                {...borderProps}
                display="flex"
                justifyContent="center"
              >
                {/* <Typography variant="h5">{name}</Typography> */}
                <Comments key={item} item={item} />
              </Box>
            </>
          ))}
        </CommentStyling>
      </ul>
    </div>
  );
};

export default CommentList;
