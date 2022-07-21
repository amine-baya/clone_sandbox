import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import { AiOutlineEdit } from "react-icons/ai";
import headerProfileStyle from "../../assets/jss/profileStyle/headerProfileStyle.js";

const useStyles = makeStyles(headerProfileStyle);

export default function HeaderProfile() {
  const classes = useStyles();

  return (
    <div className={classes.header_grid}>
      <h2>Creator Profile settings</h2>
      <span className={classes.header_icone}>
        <AiOutlineEdit />
      </span>
    </div>
  );
}
