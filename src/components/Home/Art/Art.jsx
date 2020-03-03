import React from "react";
import Grid from "@material-ui/core/Grid";

import Row from "./Row";

export const Art = ({ web3, fragmentClaimer, ERC721 }) => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
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
  );
};
