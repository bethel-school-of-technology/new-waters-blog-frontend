import React from "react";

const ModifyPost = (props: any) => {
  return (
    <>
      <form>
        <h1>Edit Post</h1>
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
        <button onClick={props.updatePost}>Update Post</button>
      </form>
    </>
  );
};
export default ModifyPost;
