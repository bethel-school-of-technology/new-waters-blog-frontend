import React, { useEffect } from "react";
import { AppBar, Typography, CssBaseline, Toolbar } from "@material-ui/core";
import styled from "styled-components";
import Blog from "../components/Blog";
import { logout } from "../utils";

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const LogoutSpace = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const RowToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  background-color: black;
`;

const Button = styled.button`
// display: flex;
// justify-content: center;
// align-item: center;
  background-color: white;
  color: black;
  font-size: 20px;
  padding: 10px 40px;
  border-radius: 20px;
  margin: 10px 0px;
  cursor: pointer;
  }
`;

// LOGOUT BUTTON & FUNCTIONALITY
const UserLogout = () => {
  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <Button type="button" onClick={handleLogout}>
      Logout
    </Button>
  );
};

// TOP APP BAR
function Home() {
  const name = window.localStorage.getItem("username");

  useEffect(() => {
    console.log(name);
  }, []);

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
          <LogoutSpace>
            <UserLogout />
            <Typography variant="h5">Welcome {name}!</Typography>
          </LogoutSpace>
        </RowToolbar>
      </AppBar>
      <Toolbar id="return-to-top" />

      {/* BLOG */}
      <Blog />
    </React.Fragment>
  );
}

export default Home;
