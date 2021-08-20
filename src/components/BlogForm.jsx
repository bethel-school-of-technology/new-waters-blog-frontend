import React, { Component, useReducer, useEffect } from "react";
import {
  makeStyles,
  Theme,
  CardContent,
  Card as MuiCard,
} from "@material-ui/core/";
import styled from "styled-components";
import DisplayAllPosts from "./content/DisplayAllPosts";
import CreateNewPost from "./content/CreateNew";
import Post from "./content/Submitted";
// import CreatePost from "./blog/CreatePost";
import ItemList from "./comments/CommentList";
import ItemsContext from "./comments/Context";
import itemsReducer from "./comments/Reducer";
import AddItemForm from "./comments/AddComment";

const useStylesCard = makeStyles((theme) => ({
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

  const [items, itemsDispatch] = useReducer(itemsReducer, []);

  useEffect(() => {
    // @ts-ignore
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      itemsDispatch({ type: "POPULATE", items });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <ItemsContext.Provider value={{ items, itemsDispatch }}>
        <Card className={classes.root}>
          <CardContent>
            <DisplayAllPosts />
            {/* <CreatePost /> */}
            <ItemList />
            <AddItemForm />
          </CardContent>
        </Card>
      </ItemsContext.Provider>
    </>
  );
};

export default BlogForm;
