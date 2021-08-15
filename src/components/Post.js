import React from "react";

const Post = ({ title, content, content1, content2, editPost, id, deletePost }) => {
  return (
    <>
      <section>
        <h3>{title}</h3>
        {/* <p>{image}</p> */}
        <p> {content}</p>
        <p> {content1}</p>
        <p> {content2}</p>
        <button onClick={() => editPost(id)}>Edit</button>
        <button onClick={() => deletePost(id)}>Delete</button>
      </section>
    </>
  );
};
export default Post;
