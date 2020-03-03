import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import Art from "./Art";
import Description from "./Description";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "65vw",
    padding: theme.spacing(3)
  }
}));

export const Home = ({ fragmentClaimer, ERC721 }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Art fragmentClaimer={fragmentClaimer} ERC721={ERC721} />
      <Description />
    </Paper>
  );
};
