import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

import ClaimDescription from "./ClaimDescription";

const useStyles = makeStyles(() => ({
  dialogActions: {
    display: "flex",
    justifyContent: "center",
    padding: 15
  },
  button: {
    backgroundColor: "#28646e"
  }
}));

export const DialogDescription = ({
  open,
  handleOpen,
  claimToken,
  tokenNumber,
  hash,
  signature
}) => {
  const classes = useStyles();

  return (
    <Dialog open={open} onClose={handleOpen} maxWidth="md" fullWidth>
      <DialogTitle>
        <span style={{ fontWeight: "bold" }}>
          Hello! Just a little description of the project :)
        </span>
      </DialogTitle>
      <DialogContent dividers>
        <ClaimDescription
          tokenNumber={tokenNumber}
          hash={hash}
          signature={signature}
        />
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <Button
          onClick={claimToken}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Claim Token
        </Button>
      </DialogActions>
    </Dialog>
  );
};
