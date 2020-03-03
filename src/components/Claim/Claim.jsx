import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import GavelIcon from "@material-ui/icons/Gavel";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";

import getWeb3 from "#root/getWeb3";
import FragmentClaimerContract from "#contractAbis/fragmentClaimer";
import { fragmentClaimerAddress, serverURI } from "#root/config/config";

import DialogDescription from "./DialogDescription";
import LabelText from "./LabelText";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#28646e"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  etherIcon: {
    height: 23,
    width: 23
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#28646e"
  }
}));

export const Claim = () => {
  const classes = useStyles();

  const [web3, setWeb3] = useState(null);
  const [fragmentClaimer, setFragmentClaimer] = useState(null);
  const [tips, setTips] = useState(0);
  const [fragment, setFragment] = useState({
    tokenNumber: "",
    fragmentName: "",
    isClaimed: false,
    uri: "",
    hash: "",
    signature: "",
    userAddress: ""
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const init = async () => {
      try {
        const web3 = await getWeb3();
        const fragmentClaimer = new web3.eth.Contract(
          FragmentClaimerContract.abi,
          fragmentClaimerAddress
        );
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];
        const tokenNumber = Number(location.pathname.split("/")[2]);
        const isClaimed = await fragmentClaimer.methods
          .tokensThatWereClaimed(tokenNumber)
          .call();

        const getFragmentName = () => {
          const totalColumns = 24;
          const rowNumber = Math.floor(tokenNumber / totalColumns);
          const columnNumber = tokenNumber % totalColumns;
          const rNum =
            Number(rowNumber) < 10 ? "0" + rowNumber : rowNumber.toString();
          const cNum =
            Number(columnNumber) < 10
              ? "0" + columnNumber
              : columnNumber.toString();
          return `X${rNum}_Y${cNum}.jpg`;
        };

        const params = location.search.split("=");
        const hash = params[1].split("&")[0];
        const signature = params[2];

        const fragmentName = getFragmentName();
        const uri = `${serverURI}/api/fragment/${fragmentName}`;
        setFragment({
          tokenNumber,
          fragmentName,
          isClaimed,
          uri,
          hash,
          signature,
          userAddress
        });
        setFragmentClaimer(fragmentClaimer);
        setWeb3(web3);
      } catch (e) {
        console.log(e);
      }
    };
    init();
  }, []);

  const claimToken = async () => {
    const { tokenNumber, uri, signature, userAddress } = fragment;
    const res = await fragmentClaimer.methods
      .claimAToken(Number(tokenNumber), uri, signature)
      .send({
        from: userAddress,
        value: web3.utils.toWei(tips.toString(), "ether"),
        gas: web3.utils.toWei("0.00000000000025", "ether")
      });
    console.log(res);
  };

  const handleTips = event => {
    setTips(event.target.value);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const { tokenNumber, isClaimed, hash, signature } = fragment;

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <GavelIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Claim !
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="fragmentNumber"
                variant="outlined"
                fullWidth
                label={
                  <LabelText text={"Token Number: " + tokenNumber.toString()} />
                }
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="status"
                variant="outlined"
                fullWidth
                label={
                  <LabelText
                    text={
                      isClaimed
                        ? "Status: Already Claimed"
                        : "Status: Not Claimed yet"
                    }
                  />
                }
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="hash"
                variant="outlined"
                fullWidth
                label={<LabelText text={"Hash: " + hash} />}
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="tips"
                variant="outlined"
                fullWidth
                label={<LabelText text={"Tips (optional):"} italic />}
                type="number"
                value={tips || ""}
                onChange={handleTips}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* <AccountCircle /> */}
                      <img
                        className={classes.etherIcon}
                        src="https://fragment-nft-server.herokuapp.com/api/fragment/ether_icon.png"
                        alt=""
                      />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
          </Grid>
          <div>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleOpen}
            >
              See Description & Claim
            </Button>
            <DialogDescription
              open={open}
              handleOpen={handleOpen}
              claimToken={claimToken}
              tokenNumber={tokenNumber}
              hash={hash}
              signature={signature}
            />
          </div>
        </form>
      </div>
    </Container>
  );
};
