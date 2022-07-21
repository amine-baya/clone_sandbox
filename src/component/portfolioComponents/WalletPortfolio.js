import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import { FaWallet } from "react-icons/fa";
import walletProfileStyle from "../../assets/jss/profileStyle/walletProfileStyle.js";

const useStyles = makeStyles(walletProfileStyle);

export default function WalletCreator() {
  const classes = useStyles();

  return (
    <div className={classes.walletPortfolio}>
      <div className={classes.wallet_link}>
        <FaWallet color="gray" size="1.4em" />
        <input
          className={classes.wallet_link_input}
          disabled
          placeholder="0x7d071B10d62afF72e08B43868e31D9F8A95dCd78"
        />
      </div>
    </div>
  );
}
