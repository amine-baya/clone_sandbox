import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import portfolioCertificateStyle from "../../assets/jss/portfolioStyle/portfolioCertificateStyle.js";

const useStyles = makeStyles(portfolioCertificateStyle);
export default function PortfolioHolder() {
  const classes = useStyles();
  return (
    <div className={classes.portfolioCertificateContainer}>
      <img
        src="../../images/fictive.jpg"
        alt="certificate"
        className={classes.portfolioCertificateImg}
      />
    </div>
  );
}
