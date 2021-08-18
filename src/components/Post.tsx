import { Typography } from "@material-ui/core";
import React from "react";

const Post = (props: any) => {
  const { title, content, editPost, id, deletePost } = props;
  return (
    <>
      <section>
        <Typography variant="h4" display="block" align="center">{title}</Typography>
        {/* <p>{image}</p> */}
        <Typography variant="body1" display="block" align="center"> {content}</Typography>
        <button onClick={() => editPost(id)}>Edit</button>
        <button onClick={() => deletePost(id)}>Delete</button>
      </section>
    </>
  );
};
export default Post;
