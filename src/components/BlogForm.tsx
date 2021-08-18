import React, { Component } from "react";
import {
  makeStyles,
  Theme,
  CardContent,
  Card as MuiCard,
} from "@material-ui/core/";
import styled from "styled-components";
import DisplayAllPosts from "./DisplayAllPosts";

const useStylesCard = makeStyles((theme: Theme) => ({
  root: {
    minWidth: 616,
    maxWidth: 225,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const Card = styled(MuiCard)`
  padding: 1rem;
`;

const BlogForm = () => {
  const classes = useStylesCard();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <DisplayAllPosts />
        </CardContent>
      </Card>
    </>
  );
};

export default BlogForm;
