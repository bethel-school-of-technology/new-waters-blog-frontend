import React from "react";
import {
  TextareaAutosize,
  TextField,
  Typography,
  Box as MuiBox,
  Paper as MuiPaper,
  Grid,
} from "@material-ui/core";
import styled from "styled-components";
import BlogForm from "../components/BlogForm";
import "../images/styles.css";
import { Link } from "react-router-dom";

const SpacingDiv = styled.div`
  padding: 0.5rem;
`;

const Box = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaperBox = styled(MuiPaper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const Paper = styled(MuiPaper)`
  display: flex  
  padding: 1rem 3rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Item = styled(MuiPaper)`
  display: flex;
  margin: 1rem;
`;

const Home = () => {
  return (
    <>
      <div>Home Page</div>
      <div>TEMPORARY DEV LINKS</div>
      <ul>
        <li>
          <Link to="/auth/sign-up">Sign Up</Link>
        </li>
        <li>
          <Link to="/auth/sign-in">Sign In</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/blog">User Blog</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Box>
        <PaperBox>
          <Paper>
            <Row>
              <div>
                <Item elevation={3}>
                  <BlogForm />
                </Item>
              </div>
              <div>
                <Item elevation={3}>
                  <BlogForm />
                </Item>
              </div>
              <div>
                <Item elevation={3}>
                  <BlogForm />
                </Item>
              </div>
              <div>
                <Item elevation={3}>
                  <BlogForm />
                </Item>
              </div>
              <div>
                <Item elevation={3}>
                  <BlogForm />
                </Item>
              </div>
            </Row>
          </Paper>
        </PaperBox>
      </Box>
    </>
  );
};

export default Home;

{
  /* <TextField
          id="paragraph-box"
          label="What is Happening"
          multiline
          rows={5}
          variant="outlined"
        /> */
}
{
  /* <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper>xs=12</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper>xs=6</Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper>xs=6</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper>xs=3</Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper>xs=3</Paper>
              </Grid>
            </Grid> */
}
{
  /* <Item elevation={3}>
              <RecipeReviewCard />
            </Item>
            <Item elevation={3}>
              <RecipeReviewCard />
            </Item>
            <Item elevation={3}>
              <RecipeReviewCard />
            </Item>
            <Item elevation={3}>
              <RecipeReviewCard />
            </Item> */
}
