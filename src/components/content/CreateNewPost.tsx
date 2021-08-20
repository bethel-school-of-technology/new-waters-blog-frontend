import { Button, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const CreateNewPost = (props: any) => {
  return (
    <>
      <CenterDiv>
        <form onSubmit={props.savePost}>
          <Column>
            <Typography variant="h3">Create New Post</Typography>
            <input
              type="text"
              onChange={props.savePostTitleToState}
              placeholder="title"
              // size="39"
              required
              ref={props.getTitle}
            ></input>
            <textarea
              onChange={props.savePostContentToState}
              placeholder="contents"
              // rows="10"
              // cols="65"
              required
              ref={props.getContent}
            ></textarea>
            <Button variant="contained">
              <button>Save Post</button>
            </Button>
          </Column>
        </form>
      </CenterDiv>
    </>
  );
};
export default CreateNewPost;
