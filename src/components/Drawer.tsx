import React, { useEffect, useReducer } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardContent,
  Box,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Context from "./comments/Context";
import Reducer from "./comments/Reducer";
import AddComment from "./comments/AddComment";
import CommentList from "./comments/CommentList";
import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 5px 40px;
  border-radius: 20px;
  margin: 10px 0px;
  cursor: pointer;
  }
`;

// BORDER STYLING
const borderProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  // m: 1,
  border: 3,
  // style: { width: '5rem', height: '5rem' },
};

// DRAWER COMPONENT STYLING
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  })
);

// COMMENT COMPONENT STYLING
const useStylesCard = makeStyles((theme) => ({
  root: {
    minWidth: 585,
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

function Drawer() {
  const classes = useStyles();
  const classesCard = useStylesCard();

  const [items, Dispatch] = useReducer(Reducer, []);

  const name = window.localStorage.getItem("username");
  const title = window.localStorage.getItem("title");
  const content = window.localStorage.getItem("content");
  const comments = window.localStorage.getItem("items");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items") || "{}");
    if (items) {
      Dispatch({ type: "POPULATE", items });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    console.log(name);
    console.log(title);
    console.log(content);
    console.log(comments);
  }, []);

  return (
    <Box borderRadius="borderRadius" {...borderProps}>
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="comment-drawer"
            id="comment-drawer"
          >
            <Button className={classes.heading}>Comment</Button>
          </AccordionSummary>
          <AccordionDetails>
            <Context.Provider value={{ items, Dispatch }}>
              <Card raised className={classesCard.root}>
                <CardContent>
                  <AddComment />
                  <CommentList />
                </CardContent>
              </Card>
            </Context.Provider>
          </AccordionDetails>
        </Accordion>
      </div>
    </Box>
  );
}

export default Drawer;
