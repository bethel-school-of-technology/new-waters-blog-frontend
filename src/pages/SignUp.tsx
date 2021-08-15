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
import { login, logout, register } from "../utils";
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

export default class SignUp extends React.Component {
  // state = {
  //   username: "",
  //   password: false,
  // };

  // handleChange = (event: any) => {
  //   const input = event.target;
  //   const value = input.value;

  //   this.setState({ [input.name]: value });
  // };

  // componentDidMount() {
  //   // const password = localStorage.Item("password", JSON.stringify(password as any));
  //   // const username = localStorage.setItem("username", JSON.stringify(username as any));
  //   // this.setState({ username, password });
  // }

  // handleFormSubmit = (props: any) => {
  //   const { username, password } = this.state;
  //   // localStorage.setItem("password", password as any);
  //   // localStorage.setItem("username", password ? username : "");

  //   // (localStorage.getItem(username as any && password as any) !== null)

  //   if (localStorage.setItem("username", password ? username : "") !== null)
  //     if (localStorage.setItem("password", password as any) !== null) {
  //       console.log(`password and username was created`);
  //       // login();
  //       // props.history.push("/");
  //     } else {
  //       console.error(`password and username NOT created`);
  //     }
  //   props.preventDefault();
  // };

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
        // register();
      } else {
        console.error(`password and username NOT set`);
      }
    props.preventDefault();
  };

  // constructor (props: any) {
  //   super(props);
  //   this.myRef = React.createRef();
  // }
  // render() {
  //   return <div ref={this.myRef} />
  // }

  //   this.state.username = React.createRef(),
  //    this.password = React.createRef()

  //   signIn = (event: any) => {
  //   this.username = React.createRef(),
  //    this.password = React.createRef()

  //     localStorage.setItem("formData", JSON.stringify(formData));
  //     console.log(localStorage.getItem("formData"));
  //     event.preventDefault();
  //   }
  // componentDidMount() {
  //   const password = localStorage.getItem("password") === "true";
  //   const username = password ? localStorage.getItem("username") : "";
  //   this.setState({ username, password });
  // }

  // handleChange = (event: any) => {
  //   const input = event.target;
  //   const value = input.type === "checkbox" ? input.checked : input.value;

  //   this.setState({ [input.name]: value });
  // };

  // handleFormSubmit = (props: any) => {
  //   const { username, password } = this.state;
  //   // localStorage.setItem("password", password as any);
  //   // localStorage.setItem("username", password ? username : "");

  //   // (localStorage.getItem(username as any && password as any) !== null)

  //   if (localStorage.setItem("username", password ? username : "") !== null)
  //     if (localStorage.setItem("password", password as any) !== null) {
  //       console.log(`password and username exists`);
  //       login();
  //       props.history.push("/sign-in");
  //     } else {
  //       console.error(`password and username NOT found`);
  //     }
  // };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <PaperBox>
          <Box>
            <Grid container justify="space-around">
              <Typography>Register</Typography>
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
                    Register
                  </Button>
                  <Link to="/sign-in">Back to Sign In</Link>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </PaperBox>
      </form>
    );
  }
}

// import React, { Component, useState } from "react";
// import {
//   Grid,
//   TextField,
//   Button,
//   makeStyles,
//   createStyles,
//   Theme,
//   Box as MuiBox,
//   Paper as MuiPaper,
//   Typography,
// } from "@material-ui/core";
// import { Formik, Form, FormikProps } from "formik";
// import * as Yup from "yup";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Box = styled(MuiBox)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const PaperBox = styled(MuiPaper)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-top: 1rem;
// `;

// const Paper = styled(MuiPaper)`
//   display: flex
//   padding: 1rem 3rem;
//   max-width: 85rem;
//   // min-width: 85rem;
//   `;

// const Row = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: center;
//   padding: 2rem;
// `;

// const SignUp = () => {
//   const [usernameReg, setUsernameReg] = useState("");
//   const [passwordReg, setPasswordReg] = useState("");

//   const signUp = () => {
//     axios
//       .post("", { username: usernameReg, password: passwordReg })
//       .then((response) => {
//         console.log(response);
//       });
//   };

//   return (
//     <Grid container justify="space-around">
//       <Grid item>
//         {/* Username */}
//         <Grid item>
//           <TextField
//             name="username"
//             id="username"
//             label="Username"
//             type="username"
//             variant="outlined"
//             onChange={(e) => {
//               setUsernameReg(e.target.value);
//             }}
//           />
//         </Grid>

//         {/* Password */}
//         <Grid item>
//           <TextField
//             name="password"
//             id="password"
//             label="Password"
//             type="password"
//             variant="outlined"
//             onChange={(e) => {
//               setPasswordReg(e.target.value);
//             }}
//           />
//         </Grid>

//         {/* Confirm Password */}
//         <Grid item>
//           <TextField
//             name="confirmPassword"
//             id="confirmPassword"
//             label="Confirm password"
//             type="password"
//             variant="outlined"
//           />
//         </Grid>

//         <Button
//           type="submit"
//           variant="contained"
//           color="secondary"
//           onClick={signUp}
//         >
//           Register
//         </Button>
//         <Link to="/sign-in">Return to Sign In page</Link>
//       </Grid>
//     </Grid>
//   );
// };

// export default SignUp;
