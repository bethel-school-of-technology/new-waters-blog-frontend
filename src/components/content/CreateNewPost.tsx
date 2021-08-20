import React from "react";

const CreateNewPost = (props: any) => {
  return (
    <>
      <form onSubmit={props.savePost}>
        <h1>Create New Post</h1>
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
        <button>Save Post</button>
      </form>
    </>
  );
};
export default CreateNewPost;
