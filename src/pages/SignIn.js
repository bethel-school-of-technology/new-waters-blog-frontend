import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField as MuiTextField, Typography} from "@material-ui/core";
import styled from "styled-components";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextField = styled(MuiTextField)`
  margin: 0.5rem;
`;

const SignIn = () => {
  //   const classes = useStyles();
  return (
    <FormColumn>
      <Typography variant="h5">New Waters</Typography>
      <Typography variant="h6">Sign in</Typography>
      <TextField id="email" label="Email" type="email" variant="outlined" />
      <TextField
        id="password"
        label="Password"
        type="password"
        variant="outlined"
      />
    </FormColumn>
  );
};

export default SignIn;
