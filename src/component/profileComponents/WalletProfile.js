import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import { FaWallet } from "react-icons/fa";
import walletProfileStyle from "../../assets/jss/profileStyle/walletProfileStyle.js";
import SaveButton from "./SaveButton.js";

const useStyles = makeStyles(walletProfileStyle);

export default function WalletProfile() {
  const [inputValue, setInputValue] = useState();
  const classes = useStyles();

  return (
    <>
      <h3 className={classes.body_title}>Wallet Address</h3>
      <div className={classes.wallet_grid}>
        <div>
          <div className={classes.wallet_link}>
            <FaWallet color="gray" size="1.4em" />
            <input
              className={classes.wallet_link_input}
              placeholder="0x7d071B10d62afF72e08B43868e31D9F8A95dCd78"
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
