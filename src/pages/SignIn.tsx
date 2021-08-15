import React, { Component, useState } from "react";
import {
  Grid,
  TextField,
  Button,
  makeStyles,
  createStyles,
  Theme,
  Box as MuiBox,
  Paper as MuiPaper,
  Typography,
} from "@material-ui/core";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { login } from '../utils';



const Box = styled(MuiBox)`
display: flex;
flex-direction: column;
align-items: center;
`;

const PaperBox = styled(MuiPaper)`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 1rem;
`;

const Paper = styled(MuiPaper)`
display: flex  
padding: 1rem 3rem;
max-width: 85rem;
// min-width: 85rem;
`;

const Row = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
padding: 2rem;
`;

const SignIn = (props: any) => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  
  // const [loginStatus, setLoginStatus] = useState("");
  
  const handleLogin = () => {
    login();
    props.history.push('/');
}

  // const login = () => {
  //   axios
  //   .post("http://localhost:5000/sign-in", {
  //     username: username,
  //     password: password,
  //   })
  //   .then((response) => {
  //     if (response.data.message) {
  //     } else {
  //       setLoginStatus(response.data[0].username);
  //       }
  //     });
  // };

  return (
    <Grid container justify="space-around">
      <Grid item>
        {/* Username */}
        <Grid item>
          <TextField
            name="username"
            id="username"
            label="Username"
            type="username"
            variant="outlined"
            // onChange={(e) => {
            //   setUsername(e.target.value);
            // }}
          />
        </Grid>

        {/* Password */}
        <Grid item>
          <TextField
            name="password"
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            // onChange={(e) => {
            //   setPassword(e.target.value);
            // }}
          />
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={() => handleLogin()}
          // onClick={login}
          // disabled={isSubmitting}
        >
          Login
        </Button>
        <Link to="/sign-up">Sign Up / Register</Link>
      </Grid>
    </Grid>
  );
};

export default SignIn;
