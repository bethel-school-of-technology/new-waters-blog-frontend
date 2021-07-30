import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "73ch",
      },
    },
  })
);

const CircleText = styled(TextField)`
  border-radius: 0;
`;

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="news"
          label="News"
          multiline
          rows={8}
          variant="outlined"
          fullWidth
        />
        <TextField
          id="stories"
          label="Stories"
          multiline
          rows={8}
          variant="outlined"
        />
        <TextField
          id="testimonies"
          label="Testimonies"
          multiline
          rows={8}
          variant="outlined"
        />
        <Button
          color="secondary"
          variant="contained"
          style={{ margin: "0.6rem" }}
        >
          Hello
        </Button>
      </form>
    </>
  );
}
