import React from "react";
import Grid from "@material-ui/core/Grid";

import Fragment from "#fragment";

export const Half = ({ fragmentClaimer, ERC721, rowNumber, firstHalf }) => {
  return (
    <Grid container item xs={6}>
      {Array(12)
        .fill(0)
        .map((_, index) => (
          <Fragment
            key={index}
            fragmentClaimer={fragmentClaimer}
            ERC721={ERC721}
            rowNumber={rowNumber}
            columnNumber={firstHalf ? index : index + 12}
            firstHalf={firstHalf}
          />
        ))}
    </Grid>
  );
};
