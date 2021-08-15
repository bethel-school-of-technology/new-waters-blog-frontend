import React, { useState, useRef } from "react";
import CreateNewPost from "./CreateNewPost";
import Post from "./Post";
import ModifyPost from "./ModifyPost";

const DisplayAllPosts = () => {
  const [title, setTitle] = useState("");
//   const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [allPosts, setAllPosts] = useState([]);
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [isModifyPost, setIsModifyPost] = useState(false);
  const [editPostId, setEditPostId] = useState("");

  // Initialize useRef
  const getTitle = useRef();
//   const getImage = useRef();
  const getContent = useRef();
  const getContent1 = useRef();
  const getContent2 = useRef();

  const savePostTitleToState = (event) => {
    setTitle(event.target.value);
  };
//   const savePostImageToState = (event) => {
//     setImage(event.target.value);
//   };
  const savePostContentToState = (event) => {
    setContent(event.target.value);
  };
  const savePostContent1ToState = (event) => {
    setContent1(event.target.value);
  };
  const savePostContent2ToState = (event) => {
    setContent2(event.target.value);
  };

  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  };
  const toggleModifyPostComponent = () => {
    setIsModifyPost(!isModifyPost);
  };
  const editPost = (id) => {
    setEditPostId(id);
    console.log(id);
    toggleModifyPostComponent();
  };
  const deletePost = (id) => {
    const modifiedPost = allPosts.filter((eachPost) => {
      return eachPost.id !== id;
    });
    setAllPosts(modifiedPost);
  };
  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = allPosts.map((eachPost) => {
      if (eachPost.id === editPostId) {
        console.log([eachPost.id, editPostId]);
        return {
          ...eachPost,
          title: title || eachPost.title,
        //   image: image || eachPost.image,
          content: content || eachPost.content,
          content1: content1 || eachPost.content1,
          content2: content2|| eachPost.content2,
        };
      }
      console.log(eachPost);
      return eachPost;
    });
    setAllPosts(updatedPost);
    toggleModifyPostComponent();
  };
  const savePost = (event) => {
    event.preventDefault();
    const id = Date.now();
    setAllPosts([...allPosts, { title, content, content1, content2, id }]);
    console.log(allPosts);
    setTitle("");
    // setImage("");
    setContent("");
    setContent1("");
    setContent2("");
    getTitle.current.value = "";
    // getImage.current.value = "";
    getContent.current.value = "";
    getContent1.current.value = "";
    getContent2.current.value = "";
    toggleCreateNewPost();
  };
  if (isCreateNewPost) {
    return (
      <>
        <CreateNewPost
          savePostTitleToState={savePostTitleToState}
        //   savePostImageToState={savePostImageToState}
          savePostContentToState={savePostContentToState}
          savePostContent1ToState={savePostContent1ToState}
          savePostContent2ToState={savePostContent2ToState}
          getTitle={getTitle}
        //   getImage={getImage}
          getContent={getContent}
          getContent1={getContent1}
          getContent2={getContent2}
          savePost={savePost}
        />
      </>
    );
  } else if (isModifyPost) {
    const post = allPosts.find((post) => {
      return post.id === editPostId;
    });
    return (
      <ModifyPost
        title={post.title}
        // image={post.image}
        content={post.content}
        content1={post.content1}
        content2={post.content2}
        updatePost={updatePost}
        savePostTitleToState={savePostTitleToState}
        // savePostImageToState={savePostImageToState}
        savePostContentToState={savePostContentToState}
        savePostContent1ToState={savePostContent1ToState}
        savePostContent2ToState={savePostContent2ToState}
      />
    );
  }
  return (
    <>
      <h2>All Posts</h2>
      {!allPosts.length ? (
        <div>
          <h3>There is nothing to see here!</h3>
        </div>
      ) : (
        allPosts.map((eachPost) => {
          return (
            <Post
              id={eachPost.id}
              key={eachPost.id}
              title={eachPost.title}
              // image={eachPost.image}
              content={eachPost.content}
              content1={eachPost.content1}
              content2={eachPost.content2}
              editPost={editPost}
              deletePost={deletePost}
            />
          );
        })
      )}
      <button onClick={toggleCreateNewPost}>Create New</button>
    </>
  );
};
export default DisplayAllPosts;
