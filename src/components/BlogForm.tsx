import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  Theme,
  IconButton,
  Collapse,
  CardActions,
  CardContent,
  CardMedia,
  CardHeader,
  Card,
  TextField,
} from "@material-ui/core/";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MultilineTextFields from "./MultiLineTextField";

const useStyles = makeStyles((theme: Theme) => ({
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

const BlogForm = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Title of post here"
        >
          <TextField id="blog-title" label="Title" variant="outlined" />
        </CardHeader>
        <CardMedia
          className={classes.media}
          image="https://static-cse.canva.com/blob/130199/17.b1ccd4a6.png"
          title="Image / media"
        >
          Place Media Here
        </CardMedia>
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
            {/* Place content here */}
            <MultilineTextFields />
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default BlogForm;
