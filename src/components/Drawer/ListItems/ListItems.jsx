import React from "react";
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import AppIcon from "@material-ui/icons/Apps";

const style = {
  textDecoration: "none",
  color: "inherit"
};

const path =
  "/claim/0?uri=QmbgVT1Q1pvQiCa8XgHLfYVNZu9U1FEKhhgJbJMV3sNxfT&sig=0x5399fb8ac16970cea342fa56a01d10df2f06fb4391dc69763c0e6ea5af84f37b16d1f98eb93c726d782231005ef86d74c5bd97b348a23ad58389cbf0e55a8bba1c";

export const ListItems = (
  <List>
    <Link to="/" style={style}>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
    <Link to={path} style={style}>
      <ListItem button>
        <ListItemIcon>
          <AppIcon />
        </ListItemIcon>
        <ListItemText primary="Claim" />
      </ListItem>
    </Link>
    <Link to="/what" style={style}>
      <ListItem button>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
    </Link>
  </List>
);
