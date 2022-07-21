import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import PortfolioCertificate from "../component/portfolioComponents/PortfolioCertificate.js";
import PortfolioHeader from "../component/portfolioComponents/PortfolioHeader.js";
import portfolioHolderStyle from "../assets/jss/portfolioStyle/portfolioHolderStyle.js";
import Navigate from "../component/navigate/Navigate.js";

const useStyles = makeStyles(portfolioHolderStyle);
export default function PortfolioHolder() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Navigate />
      <div className={classes.portfolioContainer}>
        <PortfolioHeader />
        <div className={classes.boxContainer}>
          <PortfolioCertificate />
          <PortfolioCertificate />
          <PortfolioCertificate />
        </div>
      </div>
    </div>
  );
}
