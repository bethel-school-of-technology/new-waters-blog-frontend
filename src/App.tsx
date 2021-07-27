import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps,
  Redirect,
} from "react-router-dom";
import { Typography } from "@material-ui/core";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import styled from "styled-components";
import Routes from "./routes/Routes";
import { Link } from "react-router-dom";

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 5rem;
  padding: 1rem;
  background: lightblue;
  min-width: 100%;
  margin-bottom: 1rem;
`;

function App() {
  return (
    <>
      <Title>
        <Typography variant="h4">New Waters</Typography>
        <Typography variant="h6">
          News that brings life in the midst of a world in chaos
        </Typography>
      </Title>
      <Routes />
    </>
  );
}

export default App;
