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
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "200px",
      display: "block",
      margin: "0 auto",
    },
    textField: {
      "& > *": {
        width: "100%",
      },
    },
    submitButton: {
      marginTop: "24px",
    },
    title: { textAlign: "center" },
    successMessage: { color: "green" },
    errorMessage: { color: "red" },
  })
);

interface ISignUpForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
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
    message: "Signed up successfully.",
    type: "success",
  },
  duplicate: {
    message: "Email already exist. Please use different email.",
    type: "error",
  },
  error: {
    message: "Something went wrong. Please try again.",
    type: "error",
  },
};

const SignUp: React.FunctionComponent = () => {
  const classes = useStyles();
  const [displayFormStatus, setDisplayFormStatus] = useState(false);
  const [formStatus, setFormStatus] = useState<IFormStatus>({
    message: "",
    type: "",
  });

  const createNewUser = async (data: ISignUpForm, resetForm: Function) => {
    try {
      // API call integration will be here. Handle success and error response accordingly.
      if (data) {
        setFormStatus(formStatusProps.success);
        resetForm({});
      }
    } catch (error) {
      const response = error.response;
      if (response.data === "user already exist" && response.status === 400) {
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
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values: ISignUpForm, actions) => {
          createNewUser(values, actions.resetForm);
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 500);
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email().required("Enter a valid email"),
          fullName: Yup.string(),
          password: Yup.string()
            .matches(
              /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/
            )
            .required(
              "Password must contain at least one uppercase, one lowercase, one special character and no spaces"
            ),
          confirmPassword: Yup.string()
            .required("Required")
            .test("password-match", "Password must match", function (value) {
              return this.parent.password === value;
            }),
        })}
      >
        {(props: FormikProps<ISignUpForm>) => {
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
                Sign up
              </Typography>
              <Grid container justify="space-around">
                <Grid item className={classes.textField}>
                  <Row>
                    <Column>
                      {/* Full Name */}
                      <Grid item className={classes.textField}>
                        <TextField
                          name="fullName"
                          id="fullName"
                          label="Full Name"
                          value={values.fullName}
                          type="text"
                          variant="outlined"
                          helperText={
                            errors.fullName && touched.fullName
                              ? errors.fullName
                              : "Enter your full name."
                          }
                          error={
                            errors.fullName && touched.fullName ? true : false
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>

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
                    </Column>
                    <Column>
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
                          error={
                            errors.password && touched.password ? true : false
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>

                      {/* Confirm Password */}
                      <Grid item className={classes.textField}>
                        <TextField
                          name="confirmPassword"
                          id="confirmPassword"
                          label="Confirm password"
                          value={values.confirmPassword}
                          type="password"
                          variant="outlined"
                          helperText={
                            errors.confirmPassword && touched.confirmPassword
                              ? errors.confirmPassword
                              : "Re-enter password to confirm"
                          }
                          error={
                            errors.confirmPassword && touched.confirmPassword
                              ? true
                              : false
                          }
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                      </Grid>
                    </Column>
                  </Row>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={isSubmitting}
                  >
                    Submit
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

export default SignUp;
