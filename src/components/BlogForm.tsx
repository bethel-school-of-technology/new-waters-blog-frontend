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

const useStylesTextField = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "69ch",
      },
    },
  })
);

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

const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

class SubmitBlogPost extends Component {
  submitBlogPost = () => {
    // CHANGE THE LOCAL-STORAGE
    localStorage.clear();
    // you can also like localStorage.removeItem('Token');
    window.location.href = "/home";
  };

  render() {
    return (
      <Button
        color="secondary"
        type="submit"
        variant="contained"
        onClick={this.submitBlogPost}
      >
        Submit
      </Button>
    );
  }
}

const BlogForm = () => {
  const classes = useStylesCard();
  const [expanded, setExpanded] = React.useState(false);

  const classes1 = useStylesTextField();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  class Dropzone extends Component {
    constructor(props: any) {
      super(props);
      this.state = {
        files: [],
      };
    }
    handleChange(files: any) {
      this.setState({
        files: files,
      });
      {
        /* SUCCESSFULLY STORING IMAGE IN CONSOLE/TERMINAL */
      }
      console.log(files);
    }

    render() {
      return (
        <>
          <DropzoneArea
            acceptedFiles={["image/*"]}
            dropzoneText={"Drag image here or click"}
            onChange={this.handleChange.bind(this)}
          />
        </>
      );
    }
  }

  return (
    <>
      <Card className={classes.root}>
        {/* <Row>
          <TextField id="blog-title" label="Title" variant="outlined" />
          <Typography variant="h4">{`name`}</Typography>
          <Menu />
        </Row> */}

        <Row>
          <TitleRow>
            <TextField id="blog-title" label="Title" variant="outlined" />

            {/* DYNAMICALLY INPUT NAME */}
            <Typography variant="h4">{`name`}</Typography>
          </TitleRow>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
          />
        </Row>

        {/* Picture DropZone */}
        <Dropzone />

        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {/* Blog Text Fields */}
            <form className={classes1.root} noValidate autoComplete="off">
              <TextField
                id="news"
                label="News"
                multiline
                rows={8}
                variant="outlined"
                fullWidth
              />
              <TextField
                id="stories"
                label="Stories"
                multiline
                rows={8}
                variant="outlined"
              />
              <TextField
                id="testimonies"
                label="Testimonies"
                multiline
                rows={8}
                variant="outlined"
              />
            </form>
            <SubmitBlogPost />
            {/* <Button
              color="primary"
              variant="contained"
              style={{ margin: "0.6rem" }}
            >
              Submit
            </Button> */}
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default BlogForm;
