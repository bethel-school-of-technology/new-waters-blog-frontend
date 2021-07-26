// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { TextField as MuiTextField, Typography} from "@material-ui/core";
// import styled from "styled-components";

// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     "& > *": {
// //       margin: theme.spacing(1),
// //       width: "25ch",
// //     },
// //   },
// // }));

// const FormColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const TextField = styled(MuiTextField)`
//   margin: 0.5rem;
// `;

// const SignIn = () => {
//   //   const classes = useStyles();
//   return (
//     <FormColumn>
//       <Typography variant="h5">New Waters</Typography>
//       <Typography variant="h6">Sign in</Typography>
//       <TextField id="email" label="Email" type="email" variant="outlined" />
//       <TextField
//         id="password"
//         label="Password"
//         type="password"
//         variant="outlined"
//       />
//     </FormColumn>
//   );
// };

// export default SignIn;

import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  makeStyles,
  createStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { Formik, Form, FormikProps } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "block",
      margin: "0 auto",
    },
    textField: {
      "& > *": {
        width: "100%",
      },
    },
    submitButton: {
      marginTop: "1rem",
    },
    title: { textAlign: "center" },
    successMessage: { color: "green" },
    errorMessage: { color: "red" },
  })
);

interface ISignInForm {
  email: string;
  password: string;
}

interface IFormStatus {
  message: string;
  type: string;
}

interface IFormStatusProps {
  [key: string]: IFormStatus;
}

const formStatusProps: IFormStatusProps = {
  success: {
    message: "Signed in successfully.",
    type: "success",
  },
  // duplicate: {
  //   message: "Email already exist. Please use different email.",
  //   type: "error",
  // },
  error: {
    message: "Something went wrong. Please try again.",
    type: "error",
  },
};

const SignIn: React.FunctionComponent = () => {
  const classes = useStyles();
  const [displayFormStatus, setDisplayFormStatus] = useState(false);
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: "",
    type: "",
  });

  const signInUser = async (data: ISignInForm, resetForm: Function) => {
    try {
      // API call integration will be here. Handle success and error response accordingly.
      if (data) {
        setFormStatus(formStatusProps.success);
        resetForm({});
      }
    } catch (error) {
      const response = error.response;
      if (response.data === "error" && response.status === 400) {
        setFormStatus(formStatusProps.duplicate);
      } else {
        setFormStatus(formStatusProps.error);
      }
    } finally {
      setDisplayFormStatus(true);
    }
  };

  return (
    <div className={classes.root}>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values: ISignInForm, actions) => {
          signInUser(values, actions.resetForm);
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required("Enter a valid email"),
          password: Yup.string()
            .matches(
              /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
            )
            .required("Enter correct password"),
        })}
      >
        {(props: FormikProps<ISignInForm>) => {
          const {
            values,
            touched,
            errors,
            handleBlur,
            handleChange,
            isSubmitting,
          } = props;
          return (
            <Form>
              <Typography variant="h4" className={classes.title}>
                Sign In
              </Typography>
              <Grid container justify="space-around">
                <Grid item className={classes.textField}>
                  {/* Email */}
                  <Grid item className={classes.textField}>
                    <TextField
                      name="email"
                      id="email"
                      label="Email"
                      value={values.email}
                      type="email"
                      variant="outlined"
                      helperText={
                        errors.email && touched.email
                          ? errors.email
                          : "Enter email"
                      }
                      error={errors.email && touched.email ? true : false}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>

                  {/* Password */}
                  <Grid item className={classes.submitButton}>
                    <TextField
                      name="password"
                      id="password"
                      label="Password"
                      value={values.password}
                      type="password"
                      variant="outlined"
                      helperText={
                        errors.password && touched.password
                          ? "Password must contain at least one uppercase, one lowercase, one special character and no spaces"
                          : "Enter Password"
                      }
                      error={errors.password && touched.password ? true : false}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={isSubmitting}
                  >
                    Log In
                  </Button>
                  {displayFormStatus && (
                    <div className="formStatus">
                      {formStatus.type === "error" ? (
                        <p className={classes.errorMessage}>
                          {formStatus.message}
                        </p>
                      ) : formStatus.type === "success" ? (
                        <p className={classes.successMessage}>
                          {formStatus.message}
                        </p>
                      ) : null}
                    </div>
                  )}
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignIn;
