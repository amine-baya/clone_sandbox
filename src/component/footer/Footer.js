import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import footerStyle from "../../assets/jss/footerStyle/footerStyle.js";
const useStyles = makeStyles(footerStyle);
export default function Footer() {
  const classes = useStyles();

  return <div className={classes.footer}></div>;
}
