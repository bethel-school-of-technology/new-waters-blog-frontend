import React, { Component, useReducer, useEffect } from "react";
import {
  makeStyles,
  Theme,
  CardContent,
  Card as MuiCard,
} from "@material-ui/core/";
import styled from "styled-components";
import DisplayAllPosts from "./content/DisplayAllPosts";
import CreateNew from "./content/CreateNew";
import Submitted from "./content/Submitted";
// import CreatePost from "./blog/CreatePost";
import CommentList from "./comments/CommentList";
import Context from "./comments/Context";
import Reducer from "./comments/Reducer";
import AddComment from "./comments/AddComment";

const BlogForm = () => {
  // const classes = useStylesCard();

  const [items, Dispatch] = useReducer(Reducer, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      Dispatch({ type: "POPULATE", items });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Context.Provider value={{ items, Dispatch }}>
        {/* <Card className={classes.root}> */}
          <CardContent>
            <DisplayAllPosts />
            {/* <CreatePost /> */}
          </CardContent>
        {/* </Card> */}
      </Context.Provider>
    </>
  );
};

export default BlogForm;
