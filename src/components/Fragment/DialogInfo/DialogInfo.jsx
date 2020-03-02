import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

const style = {
  display: "flex",
  flexDirection: "column"
};

export const DialogInfo = ({ open, handleOpen, fragmentNumber, isClaimed }) => {
  return (
    <Dialog open={open} onClose={handleOpen}>
      <DialogTitle>Fragment {fragmentNumber}</DialogTitle>
      <DialogContent style={style}>
        <h3>Status: {isClaimed ? "Claimed" : "Not Claimed"}</h3>
      </DialogContent>
    </Dialog>
  );
};
