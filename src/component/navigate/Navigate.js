import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import navigateHolderStyle from "../../assets/jss/navigateStyle/navigateStyle.js";
import { useLocation, useNavigate } from "react-router-dom";

const useStyles = makeStyles(navigateHolderStyle);

export default function Navigate() {
  const path = useLocation();
  const classes = useStyles();
  let navigate = useNavigate();

  return (
    <div className={classes.navigateContainer}>
      <ul className={classes.ulNavigate}>
        <li
          className={
            path.pathname === "/creator"
              ? classes.liNavigateActive
              : classes.liNavigate
          }
          onClick={() => navigate("/creator")}
        >
          Create
        </li>
        <li
          className={
            path.pathname === "/chart"
              ? classes.liNavigateActive
              : classes.liNavigate
          }
          onClick={() => navigate("/chart")}
        >
          Total Value Asset
        </li>
        <li
          className={
            path.pathname === "/portfolio"
              ? classes.liNavigateActive
              : classes.liNavigate
          }
          onClick={() => navigate("/portfolio")}
        >
          Portfolio
        </li>
      </ul>
    </div>
  );
}
