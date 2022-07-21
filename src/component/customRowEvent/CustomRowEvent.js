import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import learnerPageStyle from "../../assets/jss/learnerPageStyle/learnerPageStyle.js";

const useStyles = makeStyles(learnerPageStyle);
export default function CustomRowEvent({ event, from, to, date }) {
  const classes = useStyles();
  return (
    <div className={classes.customRowEvent}>
      <span>{event}</span>
      <span>{from}</span>
      <span>{to}</span>
      <span>{date}</span>
    </div>
  );
}
