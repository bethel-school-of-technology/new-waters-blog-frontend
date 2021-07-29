import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box as MuiBox, Paper as MuiPaper } from "@material-ui/core";

const SpacingDiv = styled.div`
  padding: 0.5rem;
`;

const Box = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PaperBox = styled(MuiPaper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

const Paper = styled(MuiPaper)`
  display: flex  
  padding: 1rem 3rem;
  max-width: 81rem;
  // min-width: 81rem;
  `;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled(MuiPaper)`
  display: flex;
  margin: 1rem;
`;

const About = () => {
  return (
    <>
      {/* <div>TEMPORARY DEV LINKS</div>
      <ul>
      <li>
      <Link to="/auth/sign-up">Sign Up</Link>
      </li>
      <li>
      <Link to="/auth/sign-in">Sign In</Link>
      </li>
      <li>
      <Link to="/home">Home</Link>
      </li>
      <li>
      <Link to="/blog">User Blog</Link>
      </li>
      <li>
      <Link to="/user">User</Link>
      </li>
      <li>
      <Link to="/about">About</Link>
      </li>
    </ul> */}
      <Box>
        <PaperBox>
          <Paper>
            <Row>
              <ul>
                <li>
                  <div>About Page</div>
                </li>
                <li>
                  <Link to="/home">Home</Link>
                </li>
              </ul>
            </Row>
          </Paper>
        </PaperBox>
      </Box>
    </>
  );
};

export default About;
