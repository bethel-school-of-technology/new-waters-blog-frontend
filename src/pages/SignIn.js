import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const SignIn = () => {
  const classes = useStyles();
  return (
    <Column>
      {/* <form className={classes.root} noValidate autoComplete="off"> */}
      <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      {/* </form> */}
    </Column>
  );
};

export default SignIn;
