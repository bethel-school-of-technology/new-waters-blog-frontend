// import React from "react";
// import {
//   TextareaAutosize,
//   TextField,
//   Typography,
//   Box as MuiBox,
//   Paper as MuiPaper,
//   Grid,
//   Container,
//   Fab,
//   Zoom,
//   makeStyles,
//   CssBaseline,
//   Toolbar,
//   AppBar,
// } from "@material-ui/core";
// import styled from "styled-components";
// import BlogForm from "../components/BlogForm";
// import "../images/styles.css";
// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     position: "fixed",
//     bottom: theme.spacing(2),
//     right: theme.spacing(2),
//   },
// }));

// function ScrollTop(props: any) {
//   const { children, window } = props;
//   const classes = useStyles();
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   const handleClick = (event: any) => {
//     const anchor = (event.target.ownerDocument || document).querySelector(
//       "#back-to-top-anchor"
//     );

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

// ScrollTop.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// const SpacingDiv = styled.div`
//   padding: 0.5rem;
// `;

// const Box = styled(MuiBox)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const PaperBox = styled(MuiPaper)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 1rem;
// `;

// const Paper = styled(MuiPaper)`
//   display: flex
//   padding: 1rem 3rem;
//   max-width: 85rem;
//   // min-width: 85rem;
//   `;

// const Row = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: center;
//   padding: 2rem;
// `;

// const Item = styled(MuiPaper)`
//   display: flex;
//   margin: 1rem;
// `;

// const Home = (props: any) => {
//   return (
//     <>
//       <Box>
//         <PaperBox>
//           <Paper>
//             <Row>
//               <div>
//                 <Item elevation={3}>
//                   <BlogForm />
//                 </Item>
//               </div>
//               <div>
//                 <Item elevation={3}>
//                   <BlogForm />
//                 </Item>
//               </div>
//               <div>
//                 <Item elevation={3}>
//                   <BlogForm />
//                 </Item>
//               </div>
//               <div>
//                 <Item elevation={3}>
//                   <BlogForm />
//                 </Item>
//               </div>
//               <div>
//                 <Item elevation={3}>
//                   <BlogForm />
//                 </Item>
//               </div>
//               <div>
//                 <Item elevation={3}>
//                   <BlogForm />
//                 </Item>
//               </div>
//             </Row>
//           </Paper>
//         </PaperBox>
//       </Box>

//       <React.Fragment>
//         <CssBaseline />
//         <AppBar>
//           <Toolbar>
//             <Typography variant="h6">Scroll to see button</Typography>
//           </Toolbar>
//         </AppBar>
//         <Toolbar id="back-to-top-anchor" />
//         <Container>
//           <Box my={2}>{[...new Array(12)].map(() => ``).join("\n")}</Box>
//         </Container>
//         <ScrollTop {...props}>
//           <Fab color="secondary" size="small" aria-label="scroll back to top">
//             <KeyboardArrowUpIcon />
//           </Fab>
//         </ScrollTop>
//       </React.Fragment>
//     </>
//   );
// };

// export default Home;

import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Box, Paper as MuiPaper } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import styled from "styled-components";
import BlogForm from "../components/BlogForm";
import Blog from "./Blog";

const SpacingDiv = styled.div`
  padding: 0.5rem;
`;

const MuiBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaperBox = styled(MuiPaper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
`;

const Paper = styled(MuiPaper)`
  display: flex  
  padding: 1rem 3rem;
  max-width: 75rem;
  // min-width: 75rem;
  `;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;

const Item = styled(MuiPaper)`
  display: flex;
  margin: 1rem;
`;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  // window?: () => Window;
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
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    // target: window ? window() : undefined,
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
        <Toolbar>
          <Typography variant="h6">Scroll to see button</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      {/* <Container> */}
      <Blog />
      {/* <MuiBox>
          <PaperBox>
            <Paper>
              <Row>
                <div>
                  <Item elevation={3}>
                    <BlogForm />
                  </Item>
                </div>
                <div>
                  <Item elevation={3}>
                    <BlogForm />
                  </Item>
                </div>
                <div>
                  <Item elevation={3}>
                    <BlogForm />
                  </Item>
                </div>
                <div>
                  <Item elevation={3}>
                    <BlogForm />
                  </Item>
                </div>
              </Row>
            </Paper>
          </PaperBox>
        </MuiBox> */}
      {/* </Container> */}
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

export default Home;
