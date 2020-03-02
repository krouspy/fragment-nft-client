import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { serverURI } from "#root/config/config";

import DialogInfo from "./DialogInfo";

const useStyles = makeStyles(() => ({
  root: {
    background: "grey",
    overflow: "hidden"
  },
  image: props => ({
    width: "97.5%",
    height: "97.5%",
    cursor: "pointer",
    objectFit: "cover",
    opacity: props.isClaimed ? 1 : 0.5
  })
}));

export const Fragment = ({
  fragmentClaimer,
  ERC721,
  rowNumber,
  columnNumber,
  firstHalf
}) => {
  const [open, setOpen] = useState(false);
  const [fragment, setFragment] = useState({
    number: 0,
    isClaimed: false,
    url: ""
  });

  const classes = useStyles({ isClaimed: fragment.isClaimed });

  useEffect(() => {
    const init = async () => {
      const fragmentName = getFragmentName();
      const url = `${serverURI}/api/fragment/${fragmentName}`;
      const tokenNumber = 24 * rowNumber + columnNumber + 1;
      const isClaimed = await fragmentClaimer.methods
        .tokensThatWereClaimed(tokenNumber)
        .call();
      setFragment({
        number: tokenNumber,
        isClaimed,
        url
      });
    };

    const getFragmentName = () => {
      let rowNum =
        Number(rowNumber) < 10 ? "0" + rowNumber : rowNumber.toString();
      let colNumber =
        Number(columnNumber) < 10
          ? "0" + columnNumber
          : columnNumber.toString();
      return `X${rowNum}_Y${colNumber}.jpg`;
    };

    if (fragmentClaimer) {
      init();
    }
  }, [fragmentClaimer, firstHalf]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const { number, isClaimed, url } = fragment;

  return (
    <Grid className={classes.root} item xs={1}>
      <img className={classes.image} onClick={handleOpen} src={url} />
      <DialogInfo
        open={open}
        handleOpen={handleOpen}
        fragmentNumber={number}
        isClaimed={isClaimed}
      />
    </Grid>
  );
};
