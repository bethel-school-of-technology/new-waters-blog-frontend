import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Button } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import styled from "styled-components";
import Blog from "../components/Blog";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const RowToolbar = styled(Toolbar)`
  display: flex;
  // flex-direction: row;
  justify-content: space-between;
`;

interface Props {
  children: React.ReactElement;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);

function ScrollTop(props: Props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

function Home(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <RowToolbar>
            <Column>
              <Typography variant="h4">New Waters Blog</Typography>
              <Typography variant="h6">
                New's that brings life in the midst of chaos
              </Typography>
            </Column>
            <div>
              <Button variant="contained">Logout</Button>
            </div>
        </RowToolbar>
      </AppBar>
      <Toolbar id="return-to-top" />
      <Blog />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

export default Home;
