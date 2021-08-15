import React, { Component } from "react";
import clsx from "clsx";
import {
  makeStyles,
  Theme,
  IconButton,
  Collapse,
  CardActions,
  CardContent,
  CardHeader,
  Card as MuiCard,
  TextField,
  Typography,
  Button,
  createStyles,
} from "@material-ui/core/";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styled from "styled-components";
import { DropzoneArea } from "material-ui-dropzone";
import DisplayAllPosts from "./DisplayAllPosts";

const useStylesCard = makeStyles((theme: Theme) => ({
  root: {
    minWidth: 616,
    maxWidth: 225,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 1rem 0.25rem 0rem;
`;

const BlogForm = () => {
  const classes = useStylesCard();

  // class Dropzone extends Component {
  //   constructor(props: any) {
  //     super(props);
  //     this.state = {
  //       files: [],
  //     };
  //   }
  //   handleChange(files: any) {
  //     this.setState({
  //       files: files,
  //     });
  //     {
  //       /* SUCCESSFULLY STORING IMAGE IN CONSOLE/TERMINAL */
  //     }
  //     console.log(files);
  //   }

  //   render() {
  //     return (
  //       <>
  //         <DropzoneArea
  //           acceptedFiles={["image/*"]}
  //           dropzoneText={"Drag image here or click"}
  //           onChange={this.handleChange.bind(this)}
  //         />
  //       </>
  //     );
  //   }
  // }

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
