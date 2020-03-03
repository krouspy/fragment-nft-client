import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    minWidth: "20vw"
  },
  row: {
    margin: theme.spacing(1)
  },
  container: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(1)
  },
  image: {
    height: 70,
    width: "auto",
    marginLeft: 10
  },
  span: {
    fontWeight: "bold"
  }
}));

export const DialogInfo = ({
  ERC721,
  open,
  url,
  handleOpen,
  fragmentNumber,
  isClaimed
}) => {
  const classes = useStyles();
  const [fragmentOwner, setFragmentOwner] = useState("");

  useEffect(() => {
    const getOwner = async () => {
      const fragmentOwner = await ERC721.methods.ownerOf(fragmentNumber).call();
      setFragmentOwner(fragmentOwner);
    };

    if (isClaimed) {
      getOwner();
    }
  }, [isClaimed]);

  return (
    <Dialog open={open} onClose={handleOpen} maxWidth="md">
      <DialogTitle>Fragment {fragmentNumber}</DialogTitle>
      <DialogContent className={classes.dialogContent} dividers>
        <Typography className={classes.row}>
          <span className={classes.span}>Status</span>:{" "}
          {isClaimed ? "Claimed" : "Not Claimed"}
        </Typography>
        {fragmentOwner && (
          <Typography className={classes.row}>
            <span className={classes.span}>Owner</span>: {fragmentOwner}
          </Typography>
        )}
        <div className={classes.container}>
          <span className={classes.span}>Fragment: </span>
          <img className={classes.image} src={url} alt="" />
        </div>
      </DialogContent>
    </Dialog>
  );
};
