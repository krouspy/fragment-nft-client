import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  title: {
    fontWeight: "bold"
  },
  warning: {
    color: "red",
    fontStyle: "italic"
  }
}));

export const ClaimDescription = ({ tokenNumber, hash, signature }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography component="h6" className={classes.title} gutterBottom>
        The fragment you are holding is part of a picture that was taken a year
        ago in Paris, during ETHCC2019.
        <br />
        <br />
        Most projects, people, ideas that influence you on a daily basis to work
        on Ethereum are in it. The complete artwork is made of hundreds of small
        paths, each one independant from the other; with each one having its own
        constraints, objectives, turning points and achievements.
        <br />
        <br />
        Taken individually, they are nothing more than themselves; but if you
        take a step back, they are part of a bigger whole that exceeds the sum
        of them.
        <br />
        <br />
        Some cool stats:
        <br />
        <ul>
          <li>The entire artwork is composed of 432 fragments</li>
          <li>
            The total path visits 5,474,296 points. It took 18 days, 4h, 30mn
            and 38s of calculation time to calculate the optimal-ish path to
            visit all the points
          </li>
          <li>
            The full artwork will be about 5.64m in width and 3.24 in height.
            <br />
            Let’s coordinate on #fragments to assemble it!
          </li>
          <li>
            The printed path is a total of 22,947,362mm, or just over 22km!
          </li>
          <li>More on https://fragment-nft.herokuapp.com/what</li>
        </ul>
        Claim your associated NFT!
        <br />
        This fragment belongs to the owner of token recorded on contract
        0x5c3d2055c44c840b9b433f1b5d117fa90cdfce30 on the Ethereum network.
        Follow the link embedded on the QR code here.
        <br />
        <br />
        You’ll need a Metamask enabled browser. You may also claim it manually -
        more info on channel #fragments on ETHCC Slack. Careful! Anyone with
        access to this data can claim the token!
        <br />
        <br />
        Token number: {tokenNumber}
        <br />
        URI: {hash}
        <br />
        signature to claim the token: {signature}
        <br />
        <br />
        <span className={classes.warning}>
          Warning! This NFT may be claimed up until March 31st, 2020. After
          that, we may claim/auction/destroy it. Or not. We’ll see. Just don’t
          expect anything if you do not claim it.
        </span>
        <br />
        <br />
        Project by Henri Lieutaud & Kenji Lau
      </Typography>
    </div>
  );
};
