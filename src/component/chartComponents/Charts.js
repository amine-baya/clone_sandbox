import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import chartsStyle from "../../assets/jss/chartStyle/chartsStyle.js";
import LineChart from "./LineChart.js";

const useStyles = makeStyles(chartsStyle);

export default function Charts() {
  const classes = useStyles();
  const data1 = [0, 10, 40, 22, 26, 32, 25, 45, 18, 21, 12, 24, 7];
  const data2 = [30, 16, 18, 40, 26, 32, 15, 15, 18, 21, 42, 24, 7];
  const data3 = [30, 16, 18, 40, 26, 32, 15, 15, 18, 21, 42, 24, 7];

  return (
    <div className={classes.chartsContainer}>
      <LineChart title="Revenu" data1={data1} chartLabel="Royalties" />
      <LineChart title="Learner" data1={data2} chartLabel="number of Learner" />
      <LineChart
        title="Ampersand"
        data1={data3}
        chartLabel="number of ampersand"
      />
    </div>
  );
}
