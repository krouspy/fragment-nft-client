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
    <Link to="/claim/0" style={style}>
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
