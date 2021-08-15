import * as React from "react";
import { useState } from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

const App = () => {
  // const [usernameReg, setUsernameReg] = useState('')
  // const [passwordReg, setPasswordReg] = useState('')

  return (
    <Router>
      <Switch>
        <PublicRoute
          restricted={true}
          component={SignUp}
          path="/sign-up"
          exact
        />
        <PublicRoute
          restricted={true}
          component={SignIn}
          path="/sign-in"
          exact
        />
        <PrivateRoute component={Home} path="/" exact />

        {/* <PrivateRoute
          restricted={true}
          component={SignUp}
          path="/sign-up"
          exact
        />
        <PrivateRoute
          restricted={true}
          component={SignIn}
          path="/sign-in"
          exact
        />
        <PrivateRoute restricted={false} component={Home} path="/" exact /> */}
        {/* <Route component={SignIn} path="/sign-in" />
        <Route component={SignUp} path="/sign-up"></Route>
        <Route component={Home} path="/"></Route> */}
        {/* <Route exact path="/blog"></Route> */}
      </Switch>
    </Router>
  );
};

export default App;
