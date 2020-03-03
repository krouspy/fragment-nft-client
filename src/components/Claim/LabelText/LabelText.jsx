import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: props => ({
    fontWeight: "bold",
    fontStyle: props.italic && "italic"
  })
}));

export const LabelText = ({ text, italic }) => {
  const classes = useStyles({ italic });

  return <div className={classes.root}>{text}</div>;
};
