import React, { useRef, useState } from "react";
import { Button, Typography } from "@material-ui/core";
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

const post = allPosts.find((post) => {
  return post.id === editPostId;
});



const Edit = (props: any) => {
  const [allPosts, setAllPosts] = useState([]);

  const post = allPosts.find((post) => {
    return post.id === editPostId;
  });

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

{/* <ModifyPost
          title={post.title}
          // image={post.image}
          content={post.content}
          updatePost={updatePost}
          savePostTitleToState={savePostTitleToState}
          // savePostImageToState={savePostImageToState}
          savePostContentToState={savePostContentToState}
        /> */}

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
          </Column>
        </form>
      </CenterDiv>
    </>
  );
};
export default Edit;
