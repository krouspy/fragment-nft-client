import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Row from "./Row";

const useStyles = makeStyles(() => ({
  paper: {
    marginTop: 80
  },
  content: {
    width: "65vw",
    height: "93vh",
    margin: "0px 15px"
  }
}));

export const Art = ({ web3, fragmentClaimer, ERC721 }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper} elevation={3}>
      <Grid
        className={classes.content}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        {Array(18)
          .fill(0)
          .map((_, index) => (
            <Row
              key={index}
              web3={web3}
              fragmentClaimer={fragmentClaimer}
              ERC721={ERC721}
              rowNumber={index}
            />
          ))}
      </Grid>
    </Paper>
  );
};
