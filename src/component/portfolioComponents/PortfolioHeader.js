import React from "react";
import WalletPortfolio from "./WalletPortfolio.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import portfolioHeaderStyle from "../../assets/jss/portfolioStyle/portfolioHeaderStyle";

const useStyles = makeStyles(portfolioHeaderStyle);
export default function PortfolioHolder() {
  const classes = useStyles();
  return (
    <div className={classes.portfolioHeader}>
      <h1 className={classes.portfolioHeaderTitle}>Collected</h1>
      <div className={classes.portfolioHeaderInfo}>
        <WalletPortfolio />
      </div>
    </div>
  );
}
