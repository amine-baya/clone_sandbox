import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import headerStyle from "../../assets/jss/headerStyle/headerStyle.js";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles(headerStyle);
export default function Header() {
  const classes = useStyles();
  let navigate = useNavigate();

  return (
    <div className={classes.header}>
      <h1 onClick={() => navigate("/")}>lillup</h1>

      <div></div>
      <ul className={classes.ul}>
        <li className={classes.li} onClick={() => navigate("/creator")}>
          Creator
        </li>
        <li className={classes.li} onClick={() => navigate("/learner")}>
          Learner
        </li>
      </ul>
    </div>
  );
}
