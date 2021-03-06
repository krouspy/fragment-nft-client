import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    width: "65vw",
    marginTop: 150
  },
  title: {
    display: "flex",
    flexDirection: "column"
  },
  warning: {
    color: "red",
    fontStyle: "italic"
  },
  span: {
    fontWeight: "bold"
  }
}));

export const About = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography className={classes.title} gutterBottom>
        <ul>
          <li>
            <span className={classes.span}>TL;PL</span>
            <br />
            Each individual frame is a physical representation of a mathematical
            artifact that is ubiquitous in our daily lives, without us realizing
            it.
          </li>
          <br />
          <li>
            <span className={classes.span}>Finding paths</span>
            <br />
            The original image is converted to black and white and is then
            transformed into a list of points that the path must visit. For
            darker parts of the image, there are more points to visits.
          </li>
          <br />
          <li>
            <span className={classes.span}>Optimising</span>
            <br />
            Then the path needs to visit all the points. To do this optimally,
            it is then a question of solving what is called “the travelling
            salesman problem” or TSP. Imagine a salesman who wants to visit a
            group of 20 cities. How to find the ideal route, which will allow
            him to spend as little time as possible on the road?
          </li>
          <br />
          <li>
            <span className={classes.span}>The itinerant traveler</span>
            <br />
            The description of this problem can be identified as early as the
            19th century, and its first formulation in mathematical terms dates
            from the 1960s. During the 1970s, 80s and 90s, many brilliant
            scientists worked on the subject. Indeed, this is a general
            optimization problem, which appears very regularly in the design of
            complex systems.
          </li>
          <br />
          <li>
            <span className={classes.span}>In your everyday life</span>
            <br />
            Today, TSP solving algorithms are still a thriving area of
            ​​mathematical research. They are present in most of the information
            systems on which you depend on a daily basis. These algorithms
            allows your power grid to deliver electricity, Waze to transport you
            to Paris, Airbus to build its planes ...
          </li>
        </ul>
      </Typography>
    </Paper>
  );
};
