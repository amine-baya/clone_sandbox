import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import styles from "../../assets/jss/buttonStyle/buttonStyle.js";

const useStyles = makeStyles(styles);

export default function RegularButton(props) {
  const { children, ...rest } = props;
  const classes = useStyles();

  return (
    <Button {...rest} className={classes.button}>
      {children}
    </Button>
  );
}
