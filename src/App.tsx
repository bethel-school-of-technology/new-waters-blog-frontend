import * as React from "react";
import { useState } from "react";
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
// const [usernameReg, setUsernameReg] = useState('')
// const [passwordReg, setPasswordReg] = useState('')

  return (
    <Router>
      <Switch>
        <Route component={SignIn} path="/sign-in" />
        <Route component={SignUp} path="/sign-up"></Route>
        <Route component={Home} path="/"></Route>
        {/* <Route exact path="/blog"></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
