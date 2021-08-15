import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import styled from "styled-components";
import Blog from "../components/Blog";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { logout } from "../utils";
// import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import Fab from "@material-ui/core/Fab";
// import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
// import Zoom from "@material-ui/core/Zoom";
// import CreateNewPost from "../components/CreateNewPost";
// import Post from "../components/Post";
// import ModifyPost from "../components/ModifyPost";
// import DisplayAllPosts from "../components/DisplayAllPosts";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const RowToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

// LOGOUT BUTTON & FUNCTIONALITY
const UserLogout = (props: any) => {
  // function handleClick() {
  //   // history.push("/sign-in");

  // }

  // let history = useHistory();
  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <Button
      color="secondary"
      variant="contained"
      type="button"
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};

// TOP APP BAR
function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <RowToolbar>
          {/* TITLE */}
          <Column>
            <Typography variant="h4">New Waters Blog</Typography>
            <Typography variant="h6">
              New's that brings life in the midst of chaos
            </Typography>
          </Column>
          {/* LOGOUT BUTTON */}
          <UserLogout />
        </RowToolbar>
      </AppBar>
      <Toolbar id="return-to-top" />
      {/* BLOG */}
      <Blog />
    </React.Fragment>
  );
}

export default Home;

// interface Props {
//   children: React.ReactElement;
// }

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       position: "fixed",
//       bottom: theme.spacing(2),
//       right: theme.spacing(2),
//     },
//   })
// );

// // SCROLL-TOP FUNCTIONALITY
// function ScrollTop(props: Props) {
//   const { children } = props;
//   const classes = useStyles();
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 10,
//   });

//   const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
//     const anchor = (
//       (event.target as HTMLDivElement).ownerDocument || document
//     ).querySelector("#back-to-top-anchor");

//     if (anchor) {
//       anchor.scrollIntoView({ behavior: "smooth", block: "center" });
//     }
//   };

//   return (
//     <Zoom in={trigger}>
//       <div onClick={handleClick} role="presentation" className={classes.root}>
//         {children}
//       </div>
//     </Zoom>
//   );
// }

// LOGOUT BUTTON
// class UserLogout extends Component {
//   logout = () => {
//     localStorage.clear();
//     // you can also like localStorage.removeItem('Token');
//     window.location.href = "/sign-in";
//   };

//   render() {
//     return (
//       <Button onClick={this.logout} variant="contained">
//         Logout
//       </Button>
//     );
//   }
// }
