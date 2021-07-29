import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps,
  Redirect,
  NavLink,
} from "react-router-dom";
import {
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@material-ui/core";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import styled from "styled-components";
import Routes from "./routes/Routes";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import Header from "./pages/Header";

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

const TitleLineUp = styled.div``;

function App() {
  // const [anchorMenu, setAnchorMenu] = React.useState<any>(null);
  // const history = useHistory();
  // const dispatch = useDispatch();

  // const toggleMenu = (event: React.SyntheticEvent) => {
  //   setAnchorMenu(event.currentTarget);
  // };

  // const closeMenu = () => {
  //   setAnchorMenu(null);
  // };

  // const handleSignOut = async () => {
  //   await dispatch(signOut());
  //   history.push("/auth/sign-in");
  // };

  return (
    <>
      <TitleLineUp>
        {/* <Tooltip title="About">
          <IconButton
            aria-owns={Boolean(anchorMenu) ? "menu-appbar" : undefined}
            aria-haspopup="true"
            onClick={toggleMenu}
            color="inherit"
          >
            <SettingsIcon />
          </IconButton>
        </Tooltip> */}
        {/* <Menu
          id="menu-appbar"
          anchorEl={anchorMenu}
          open={Boolean(anchorMenu)}
          onClose={closeMenu}
        >
          <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
        </Menu> */}
        {/* <Header /> */}
      </TitleLineUp>
      <Routes />
    </>
  );
}

export default App;
