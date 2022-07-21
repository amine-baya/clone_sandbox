import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import Navigate from "../component/navigate/Navigate.js";
import chartHolderStyle from "../assets/jss/chartStyle/chartHolderStyle.js";
import Charts from "../component/chartComponents/Charts.js";

const useStyles = makeStyles(chartHolderStyle);
export default function ChartHolder() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Navigate />
      <Charts />
    </div>
  );
}
