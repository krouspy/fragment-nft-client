import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";

const style = {
  display: "flex",
  flexDirection: "column"
};

export const DialogInfo = ({
  ERC721,
  open,
  handleOpen,
  fragmentNumber,
  isClaimed
}) => {
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
    <Dialog open={open} onClose={handleOpen}>
      <DialogTitle>Fragment {fragmentNumber}</DialogTitle>
      <DialogContent style={style} dividers>
        <Typography>Status: {isClaimed ? "Claimed" : "Not Claimed"}</Typography>
        {fragmentOwner && <Typography>Owner: {fragmentOwner}</Typography>}
      </DialogContent>
    </Dialog>
  );
};
