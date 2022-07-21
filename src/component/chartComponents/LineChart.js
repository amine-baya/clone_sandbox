import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { IoMdShareAlt } from "react-icons/io";
import { FaExpandAlt } from "react-icons/fa";
import { BsInfoCircleFill } from "react-icons/bs";

// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import lineChartsStyle from "../../assets/jss/chartStyle/lineChartStyle.js";
const useStyles = makeStyles(lineChartsStyle);
export default function Charts({ title, data1, chartLabel }) {
  const classes = useStyles();

  return (
    <div className={classes.lineChartsContainer}>
      <h2 className={classes.lineChartHeader}>{title}</h2>
      <div className={classes.lineChartBody}>
        <Line
          data={{
            labels: [
              " ",
              "JAN",
              "FEB",
              "MAR",
              "APR",
              "MAY",
              "JUN",
              "JUL",
              "AUG",
              "SEP",
              "OCT",
              "NOV",
              "DEC"
            ],
            datasets: [
              {
                label: chartLabel,
                data: data1,
                backgroundColor: "#ff00004d",
                borderWidth: "1px"
              }
            ]
          }}
          height={400}
          width={600}
          options={{
            tension: 0.5,
            fill: true,
            maintainAspectRatio: false
          }}
        />
      </div>
      <div className={classes.lineChartInfo}>
        <div></div>
        <div className={classes.lineChartInfoOptions}>
          <span className={classes.lineChartInfoOption}>ALL</span>
          <span className={classes.lineChartInfoOption}>YTD</span>
          <span className={classes.lineChartInfoOption}>12M</span>
        </div>
      </div>

      <div className={classes.lineChartButtons}>
        <div className={classes.lineChartButton}>
          <FaExpandAlt
            color="#b9b7b7"
            size="1.2em"
            className={classes.lineChartIcon}
          />

          <span>EXPAND</span>
        </div>
        <div className={classes.lineChartButton}>
          <IoMdShareAlt
            color="#b9b7b7"
            size="1.2em"
            className={classes.lineChartIcon}
          />
          <span>SHARE</span>
        </div>
        <div className={classes.lineChartButton}>
          <BsInfoCircleFill
            color="#b9b7b7"
            size="1.2em"
            className={classes.lineChartIcon}
          />
          <span>MORE INFO</span>
        </div>
      </div>
    </div>
  );
}
