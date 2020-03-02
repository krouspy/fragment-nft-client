import React from "react";
import Grid from "@material-ui/core/Grid";
import Half from "./Half";

export const Row = ({ fragmentClaimer, ERC721, rowNumber }) => {
  return (
    <Grid container item>
      <Half
        fragmentClaimer={fragmentClaimer}
        ERC721={ERC721}
        rowNumber={rowNumber}
        firstHalf
      />
      <Half
        fragmentClaimer={fragmentClaimer}
        ERC721={ERC721}
        rowNumber={rowNumber}
      />
    </Grid>
  );
};
