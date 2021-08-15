import * as React from "react";
import { Component, useState } from "react";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import BlogPostsDbPull from "./components/BlogPostsDbPull";
import UsersDbPull from "./components/UsersDbPull";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

class App extends Component {
  // const [usernameReg, setUsernameReg] = useState('')
  // const [passwordReg, setPasswordReg] = useState('')

  
  
  render() {
    // const [token, setToken] = useState();
    // if(!token) {
    //   return <Login setToken={setToken} />
    // }
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
            <PrivateRoute component={Home} path="/" exact />
          </Switch>
        </Router>
        <div>
          <UsersDbPull uri="http://localhost:5000/users" />
          <BlogPostsDbPull uri="http://localhost:5000/blog-posts" />
        </div>
      </>
    );
  }
}

export default App;
