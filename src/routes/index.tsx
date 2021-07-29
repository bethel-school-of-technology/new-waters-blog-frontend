import React from "react";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
// import About from "../pages/About";
import User from "../pages/User";
import Blog from "../pages/Blog";

const homeRoute = {
  id: "Home",
  path: "/home",
  containsHome: true,
  children: null,
  icon: null,
  guard: null,
  component: Home,
};

// const aboutRoute = {
//   id: "About",
//   path: "/about",
//   children: null,
//   component: About,
//   icon: null,
//   guard: null,
// };

const userRoute = {
  id: "User",
  path: "/user",
  children: null,
  component: User,
  icon: null,
  guard: null,
};

const blogRoute = {
  id: "blog",
  path: "/blog",
  children: null,
  component: Blog,
  icon: null,
  guard: null,
};

const authRoutes = {
  id: "Auth",
  path: "/auth",
  children: [
    {
      name: "Sign In",
      path: "/auth/sign-in",
      component: SignIn,
      guard: null,
    },
    {
      name: "Sign Up",
      path: "/auth/sign-up",
      component: SignUp,
      guard: null,
    },
  ],
};

export const authLayoutRoutes = [authRoutes];

export const pageRoutes = [
  homeRoute,
  // aboutRoute,
  userRoute,
  blogRoute,
];
