import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import getWeb3 from "#root/getWeb3";
import FragmentClaimerContract from "#contractAbis/fragmentClaimer";
import ERC721MetadataMintableContract from "#contractAbis/ERC721MetadataMintable";
import {
  fragmentClaimerAddress,
  ERC721MetadataMintableAddress
} from "#root/config/config";

import Header from "../Header";
import Drawer from "../Drawer";
import Home from "../Home";
import Claim from "../Claim";
import About from "../About";

const style = {
  flexGrow: 1,
  display: "flex",
  justifyContent: "center"
};

export const App = () => {
  const [data, setData] = useState({
    web3: null,
    fragmentClaimer: null,
    ERC721: null,
    tokenName: "",
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
        const ERC721 = new web3.eth.Contract(
          ERC721MetadataMintableContract.abi,
          ERC721MetadataMintableAddress
        );
        const tokenName = await ERC721.methods.name().call();
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];
        setData({ web3, fragmentClaimer, ERC721, tokenName, userAddress });
      } catch (e) {
        console.log(e);
      }
    };
    init();
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  const { fragmentClaimer, ERC721, tokenName, userAddress } = data;

  return (
    <Router>
      <Header
        open={open}
        handleOpen={handleOpen}
        tokenName={tokenName}
        userAddress={userAddress}
      />
      <Drawer open={open} handleOpen={handleOpen} />
      <main style={style}>
        <Switch>
          <Route exact path="/">
            <Home fragmentClaimer={fragmentClaimer} ERC721={ERC721} />
          </Route>
          <Route exact path="/claim/:tokenNumber">
            <Claim />
          </Route>
          <Route exact path="/what">
            <About />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};
