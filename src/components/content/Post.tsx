import { Typography } from "@material-ui/core";
import styled from "styled-components";

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100px;
  padding: 5px;
`;

const Post = (props: any) => {
  const { title, content, editPost, id, deletePost } = props;
  return (
    <>
      <section>
        <Typography variant="h4" display="block" align="center">
          {title}
        </Typography>
        {/* <p>{image}</p> */}
        <Typography variant="body1" display="block" align="center">
          {" "}
          {content}
        </Typography>
        <div>
          <ButtonDiv>
            <button onClick={() => editPost(id)}>Edit</button>
          </ButtonDiv>
          <ButtonDiv>
            <button onClick={() => deletePost(id)}>Delete</button>
          </ButtonDiv>
        </div>
      </section>
    </>
  );
};
export default Post;
