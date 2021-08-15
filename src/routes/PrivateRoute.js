import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../utils";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect to sign-in
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to="/sign-in" />
      }
    />
  );
};

export default PrivateRoute;
