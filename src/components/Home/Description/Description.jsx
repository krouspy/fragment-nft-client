import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    // fontFamily: "Roboto",
    fontSize: "1.2em"
  },
  title: {
    fontWeight: "bold"
  },
  item: {
    listStyleType: "square"
  }
}));

export const Description = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
        variant="h6"
        component="h6"
        align="center"
        gutterBottom
      >
        The fragment you are holding is part of a picture that was taken a year
        ago in Paris, during ETHCC2019.
        <br />
        Most projects, people, ideas that influence you on a daily basis to work
        on Ethereum are in it.
      </Typography>
      <Typography paragraph>
        The complete artwork is made of hundreds of small paths, each one
        independant from the other; with each one having its own constraints,
        objectives, turning points and achievements. Taken individually, they
        are nothing more than themselves; but if you take a step back, they are
        part of a bigger whole that exceeds the sum of them.
      </Typography>
      <Divider />
      <Typography
        className={classes.title}
        variant="h6"
        component="h6"
        align="center"
        gutterBottom
      >
        Some cool stats
      </Typography>
      <ul>
        <li className={classes.item}>
          <Typography paragraph>
            The entire artwork is composed of 432 fragments
          </Typography>
        </li>
        <li className={classes.item}>
          <Typography paragraph>
            The total path visits 5,474,296 points. It took 18 days, 4h, 30mn
            and 38s of calculation time to calculate the optimal-ish path to
            visit all the points
          </Typography>
        </li>
        <li className={classes.item}>
          <Typography paragraph>
            The full artwork will be about 5.64m in width and 3.24 in height.
            Let’s coordinate on #fragments to assemble it!
          </Typography>
        </li>
        <li className={classes.item}>
          <Typography paragraph>
            The printed path is a total of 22,947,362mm, or just over 22km!
          </Typography>
        </li>
        <li className={classes.item}>
          <Typography paragraph>
            {/* More on https://fragment-nft.herokuapp.com/what */}
            More info{" "}
            <a
              href="localhost:1234/what"
              rel="noopener noreferrer"
              target="_blank"
            >
              here
            </a>
          </Typography>
        </li>
      </ul>
    </div>
  );
};
