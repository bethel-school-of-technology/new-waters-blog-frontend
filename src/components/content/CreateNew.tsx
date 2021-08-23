import React from "react";
import { Typography } from "@material-ui/core";
import styled from "styled-components";

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;

// ENTER TITLE STYLING
const TextTitle = styled.input`
  background-color: white;
  color: black;
  font-size: 30px;
  padding: 5px 15px;
  border-radius: 10px;
  margin: 10px 0px;
  cursor: pointer;
  }
`;

// ENTER CONTENT STYLING
const TextContent = styled.textarea`
  background-color: white;
  color: black;
  font-size: 20px;
  padding: 5px 15px;
  border-radius: 10px;
  margin: 10px 0px;
  cursor: pointer;
  }
`;

// BUTTON STYLING
const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 10px 50px;
  border-radius: 20px;
  margin: 10px 0px;
  cursor: pointer;
  }
`;

// RETURN TO HOME PAGE BUTTON
const BackButton = styled.button`
  background-color: red;
  color: white;
  font-size: 20px;
  padding: 3px 15px;
  border-radius: 20px;
  margin: 10px 0px;
  cursor: pointer;
  }
`;

// Create New Post
const CreateNew = (props: any) => {
  return (
    <>
      <CenterDiv>
        <form onSubmit={props.savePost}>
          <Column>
            <Typography variant="h4">Create New Post</Typography>
            {/* TITLE */}
            <TextTitle
              type="text"
              onChange={props.savePostTitleToState}
              placeholder="Title of post"
              ref={props.getTitle}
              required
            />

            {/* CONTENTS */}
            <TextContent
              onChange={props.savePostContentToState}
              placeholder="Post contents"
              ref={props.getContent}
              required
            />
            <Button>Save Post</Button>
          </Column>
        </form>
        <a href="/" target="home">
          <BackButton> Back </BackButton>
        </a>
      </CenterDiv>
    </>
  );
};
export default CreateNew;
