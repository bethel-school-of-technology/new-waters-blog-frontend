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
import { login, logout } from "../utils";
import { render } from "@testing-library/react";

const Box = styled(MuiBox)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem;
  ]min-width: 30rem;
`;

const PaperBox = styled(MuiPaper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin: 10rem;
  padding: 3rem;
  // max-width: 85rem;
`;

const Paper = styled(MuiPaper)`
display: flex  
padding: 1rem 3rem;
max-width: 85rem;
min-width: 85rem;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;

export default class SignIn extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event: any) => {
    const input = event.target;
    const value = input.value;

    this.setState({ [input.name]: value });
    this.setState({ [input.password]: value });
  };

  componentDidMount() {
    const password = localStorage.getItem("password") === "";
    const username = localStorage.getItem("username") === "";
    this.setState({ username, password });
  }

  handleFormSubmit = (props: any) => {
    const { username, password } = this.state;
    // localStorage.setItem("password", password as any);
    // localStorage.setItem("username", password ? username : "");

    // (localStorage.getItem(username as any && password as any) !== null)

    if (localStorage.setItem("username", password ? username : "") !== null)
      if (localStorage.setItem("password", password as string) !== null) {
        console.log(`password and username exists`);
        login();
        props.history.push("/");
      } else {
        console.error(`password and username NOT found`);
      }
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <PaperBox>
          <Box>
            <Grid container justify="space-around">
              <Typography>Sign In</Typography>
              <Grid container justify="space-around">
                <Grid item>
                  {/* USERNAME */}
                  <Grid item>
                    <TextField
                      name="username"
                      id="username"
                      label="Username"
                      type="username"
                      variant="outlined"
                      value={this.state.username}
                      onChange={this.handleChange}
                      // onChange={(e) => {
                      //   setUsername(e.target.value);
                      // }}
                    />
                  </Grid>
                  {/* PASSWORD */}
                  <Grid item>
                    <TextField
                      name="password"
                      id="password"
                      label="Password"
                      type="password"
                      variant="outlined"
                      value={this.state.password}
                      onChange={this.handleChange}
                      // onChange={(e) => {
                      //   setPassword(e.target.value);
                      // }}
                    />
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    // onClick={() => handleLogin()}
                    // onClick={login}
                    // disabled={isSubmitting}
                  >
                    Login
                  </Button>
                  <Link to="/sign-up">Sign Up / Register</Link>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </PaperBox>
      </form>
    );
  }
}

// function SignIn(props: any) {
//   // const [username, setUsername] = useState("");
//   // const [password, setPassword] = useState("");

//   // const [loginStatus, setLoginStatus] = useState("");

//   const state = {
//     username: "",
//     password: "",
//   };

//   const handleChange = (event: any) => {
//     const input = event.target;
//     const value = input.value;

//     event.setState({ [input.username]: value });
//     event.setState({ [input.password]: value });
//   };

//   const handleFormSubmit = (event: any) => {
//     const { username, password } = event.state;
//     localStorage.setItem("username", username);
//     localStorage.setItem("password", password);
//   };

//   const handleLogin = () => {
//     login();
//     props.history.push("/");
//   };

//   // const login = () => {
//   //   axios
//   //   .post("http://localhost:5000/sign-in", {
//   //     username: username,
//   //     password: password,
//   //   })
//   //   .then((response) => {
//   //     if (response.data.message) {
//   //     } else {
//   //       setLoginStatus(response.data[0].username);
//   //       }
//   //     });
//   // };
//   return (
//     <form onSubmit={props.handleFormSubmit}>
//       <Grid container justify="space-around">
//         <Grid item>
//           {/* Username */}
//           <Grid item>
//             <TextField
//               name="username"
//               id="username"
//               label="Username"
//               type="username"
//               variant="outlined"
//               // onChange={(e) => {
//               //   setUsername(e.target.value);
//               // }}
//             />
//           </Grid>

//           {/* Password */}
//           <Grid item>
//             <TextField
//               name="password"
//               id="password"
//               label="Password"
//               type="password"
//               variant="outlined"
//               // onChange={(e) => {
//               //   setPassword(e.target.value);
//               // }}
//             />
//           </Grid>
//           <Button
//             type="submit"
//             variant="contained"
//             color="secondary"
//             onClick={() => handleLogin()}
//             // onClick={login}
//             // disabled={isSubmitting}
//           >
//             Login
//           </Button>
//           <Link to="/sign-up">Sign Up / Register</Link>
//         </Grid>
//       </Grid>
//     </form>
//   );
// }

// export default SignIn;
