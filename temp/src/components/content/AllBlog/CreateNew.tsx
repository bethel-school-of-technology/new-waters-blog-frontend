import { Button, Typography } from "@material-ui/core";
import React, { useRef, useState } from "react";
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

{
  /* <>
<CreateNewPost
  savePostTitleToState={savePostTitleToState}
  //   savePostImageToState={savePostImageToState}
  savePostContentToState={savePostContentToState}
  getTitle={getTitle}
  //   getImage={getImage}
  getContent={getContent}
  savePost={savePost}
/>
</> */
}

// Create New Post
const CreateNew = (props: any) => {
  const [allPosts, setAllPosts] = useState([]);

  // Initialize useRef
  const getTitle = useRef();
  const getContent = useRef();

  const [title, setTitle] = useState("");
  const savePostTitleToState = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTitle(event.target.value);
  };

  const [content, setContent] = useState("");
  const savePostContentToState = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setContent(event.target.value);
  };

  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  };

  // EDIT POST
  const [editPostId, setEditPostId] = useState("");
  const editPost = (id: React.SetStateAction<string>) => {
    setEditPostId(id);
    console.log(id);
    toggleModifyPostComponent();
  };
  const [isModifyPost, setIsModifyPost] = useState(false);

  const toggleModifyPostComponent = () => {
    setIsModifyPost(!isModifyPost);
  };

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
              required
              ref={props.getTitle}
            ></input>
            <textarea
              onChange={props.savePostContentToState}
              placeholder="contents"
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
export default CreateNew;
