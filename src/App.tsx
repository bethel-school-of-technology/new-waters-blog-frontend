import * as React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

function App(props: any) {

  return (
    <>
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
          <PublicRoute restricted={true} component={Home} path="/" exact />
          {/* <PrivateRoute component={Home} path="/" exact /> */}
        </Switch>
      </Router>
    </>
  );
}
// }

export default App;
