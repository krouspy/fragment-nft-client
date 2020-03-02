import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import getWeb3 from "#root/getWeb3";
import FragmentClaimerContract from "#contractAbis/fragmentClaimer";

import Header from "../Header";
import Drawer from "../Drawer";
import Home from "../Home";
import Claim from "../Claim";
import { fragmentClaimerAddress } from "#root/config/config";

const style = {
  flexGrow: 1,
  display: "flex",
  justifyContent: "center"
};

export const App = () => {
  const [data, setData] = useState({
    web3: null,
    fragmentClaimer: null
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
        setData({ web3, fragmentClaimer });
      } catch (e) {
        console.log(e);
      }
    };
    init();
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  const { web3, fragmentClaimer } = data;

  return (
    <Router>
      <Header open={open} handleOpen={handleOpen} />
      <Drawer open={open} handleOpen={handleOpen} />
      <main style={style}>
        <Switch>
          <Route exact path="/">
            <Home web3={web3} fragmentClaimer={fragmentClaimer} />
          </Route>
          <Route exact path="/claim/:tokenNumber">
            <Claim />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};
