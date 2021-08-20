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

const ModifyPost = (props: any) => {
  const { title, content, editPost, id, deletePost } = props;

  return (
    <>
      <CenterDiv>
        <form>
          <Column>
            <Typography variant="h4">Edit Post</Typography>
            <input
              defaultValue={props.title}
              onChange={props.savePostTitleToState}
              type="text"
              placeholder="title"
            />
            <textarea
              defaultValue={props.content}
              placeholder="contents"
              onChange={props.savePostContentToState}
            ></textarea>
            <Button onClick={props.updatePost} color="secondary">
              Edit
            </Button>
            {/* <button onClick={() => returnToPost(id)}>Return To Post</button> */}
          </Column>
        </form>
      </CenterDiv>
    </>
  );
};
export default ModifyPost;
