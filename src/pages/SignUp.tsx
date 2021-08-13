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
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

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

const SignUp = () => {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");


  
  const signUp = () => {
    axios
      .post("", { username: usernameReg, password: passwordReg })
      .then((response) => {
        console.log(response);
      });
  };

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
            onChange={(e) => {
              setUsernameReg(e.target.value);
            }}
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
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
        </Grid>

        {/* Confirm Password */}
        <Grid item>
          <TextField
            name="confirmPassword"
            id="confirmPassword"
            label="Confirm password"
            type="password"
            variant="outlined"
          />
        </Grid>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={signUp}
        >
          Register
        </Button>
        <Link to="/sign-in">Return to Sign In page</Link>
      </Grid>
    </Grid>
  );
};

export default SignUp;
