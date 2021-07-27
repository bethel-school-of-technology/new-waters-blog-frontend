import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div>
      <div>TEMPORARY DEV LINKS</div>
      <ul>
        <li>
          <Link to="/auth/sign-up">Sign Up</Link>
        </li>
        <li>
          <Link to="/auth/sign-in">Sign In</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/:blog">User Blog</Link>
        </li>
        <li>
          <Link to="/:user">User</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default User;
