import { Typography } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonPadding = styled.div`
  padding: 2px;
`;

const Padding = styled.div`
  padding: 1rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100px;
  padding: 5px;
`;


// const savePost = (event: { preventDefault: () => void }) => {
//   event.preventDefault();
//   const id = Date.now();
//   setAllPosts([...allPosts, { title, content, id }]);
//   console.log(allPosts);
//   setTitle("");
//   // setImage("");
//   setContent("");
//   getTitle.current.value = "";
//   // getImage.current.value = "";
//   getContent.current.value = "";
//   toggleCreateNewPost();
// };

const Submitted = (props: any) => {
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

  const { 
    // title, content, editPost, 
    id, deletePost } = props;

  useEffect(() => {
    localStorage.setItem("content", JSON.stringify(content));
  }, [content]);

  useEffect(() => {
    localStorage.setItem("title", JSON.stringify(title));
  }, [title]);

  // useEffect(() => {
  //   localStorage.setItem("edit", JSON.stringify(editPost));
  // }, [editPost]);

  return (
    <>
      <Padding>
        <section>
          <Typography variant="h4" display="block" align="center">
            {title}
          </Typography>
          {/* <p>{image}</p> */}
          <Typography variant="body1" display="block" align="center">
            {content}
          </Typography>
          <div>
            <CenterDiv>
              <ButtonPadding>
                {/* <ButtonDiv> */}
                <button onClick={() => editPost(id)}>Edit</button>
              </ButtonPadding>
              <ButtonPadding>
                {/* </ButtonDiv> */}
                {/* <ButtonDiv> */}
                <button onClick={() => deletePost(id)}>Delete</button>
                {/* </ButtonDiv> */}
              </ButtonPadding>
            </CenterDiv>
          </div>
        </section>
      </Padding>
    </>
  );
};
export default Submitted;
