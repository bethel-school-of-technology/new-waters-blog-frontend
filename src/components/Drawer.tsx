import React, { useEffect, useReducer } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box as MuiBox,
  Paper as MuiPaper,
  Card as MuiCard,
  CardContent,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Context from "./comments/Context";
import Reducer from "./comments/Reducer";
import styled from "styled-components";
import AddComment from "./comments/AddComment";
import CommentList from "./comments/CommentList";

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

const Box = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

const Wrapper = styled(MuiPaper)`
  display: flex  
  padding: 1rem 3rem;
  margin: 2rem;
  max-width: 85rem;
  `;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
  max-width: 85rem;
  min-width: 50rem;
`;

const StyledPaper = styled(MuiPaper)`
  display: flex;
  margin: 1rem;
`;

const Card = styled(MuiCard)`
  padding: 1rem;
`;

const StyledTypography = styled(Typography)`
  display: flex;
  justify-content: center;
`;

function Drawer() {
  const classes = useStyles();

  const classesCard = useStylesCard();

  const name = window.localStorage.getItem("username");
  const title = window.localStorage.getItem("title");
  const content = window.localStorage.getItem("content");
  const comments = window.localStorage.getItem("items");

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

  useEffect(() => {
    console.log(name);
    console.log(title);
    console.log(content);
    console.log(comments);
  }, []);

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="comment-drawer"
          id="comment-drawer"
        >
          <StyledTypography>
            <Typography className={classes.heading}>Open to Comment</Typography>
          </StyledTypography>
        </AccordionSummary>
        <AccordionDetails>
          <Context.Provider value={{ items, Dispatch }}>
            <Card className={classesCard.root}>
              <CardContent>
                <AddComment />
                <CommentList />
              </CardContent>
            </Card>
          </Context.Provider>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Drawer;
