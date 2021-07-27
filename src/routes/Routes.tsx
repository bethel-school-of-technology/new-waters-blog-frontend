import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps,
  Redirect,
} from "react-router-dom";
import { authLayoutRoutes, pageRoutes } from "./index";
import { RouteType } from "../types/routes";
import AuthLayout from "../layouts/Auth";
import HomeLayout from "../layouts/HomeLayout";

const childRoutes = (Layout: React.ElementType, routes: Array<RouteType>) =>
  routes.map(
    ({ component: Component, guard, children, path }, index: number) => {
      const Guard = guard || React.Fragment;

      return children ? (
        children.map((element: any, index: number) => {
          const Guard = element.guard || React.Fragment;

          return (
            <Route
              key={index}
              path={element.path}
              exact
              render={(props: RouteComponentProps) => (
                <Guard>
                  <Layout>
                    <element.component {...props} />
                  </Layout>
                </Guard>
              )}
            />
          );
        })
      ) : Component ? (
        <Route
          key={index}
          path={path}
          exact
          render={(props) => (
            <Guard>
              <Layout>
                <Component {...props} />
              </Layout>
            </Guard>
          )}
        />
      ) : null;
    }
  );

const Routes = () => (
  <Router>
    <Switch>
      {childRoutes(AuthLayout, authLayoutRoutes as any)}
      {childRoutes(HomeLayout, pageRoutes as any)}
      <Route exact path="/">
        <Redirect to="/auth/sign-in" />
      </Route>
      <Route exact path="/auth/sign-up"></Route>
      <Route exact path="/home"></Route>
      <Route exact path="/about"></Route>
      <Route path="/:blog"></Route>
      <Route path="/:user"></Route>
    </Switch>
  </Router>
);

export default Routes;
