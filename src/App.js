// import "./App.css";
import { Typography } from "@material-ui/core";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import styled from "styled-components";

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 5rem;
  padding: 1rem;
  background: lightblue;
  min-width: 100%;
`;

function App() {
  return (
    <>
      <Title>
        <Typography variant="h4">New Waters</Typography>
        <Typography variant="p">
          News that brings life in the midst of a world in chaos
        </Typography>
      </Title>
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      <Home />
    </>
  );
}

export default App;
