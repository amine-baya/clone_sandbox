import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import { BsTwitter } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
import { SiLinkedin } from "react-icons/si";

import socialProfileStyle from "../../assets/jss/profileStyle/socialProfileStyle.js";
import SaveButton from "./SaveButton.js";

const useStyles = makeStyles(socialProfileStyle);

export default function HeaderProfile() {
  const classes = useStyles();

  return (
    <div className={classes.social_grid}>
      <h3 className={classes.body_title}>Social Links</h3>
      <div className={classes.social_link}>
        <BsTwitter color="gray" size="1.4em" />{" "}
        <input
          className={classes.social_link_input}
          placeholder="www.twitter.com"
        />
      </div>
      <div className={classes.social_link}>
        <ImInstagram color="gray" size="1.4em" />{" "}
        <input
          className={classes.social_link_input}
          placeholder="www.instagram.com"
        />
      </div>
      <div className={classes.social_link_grid}>
        <div className={classes.social_link}>
          <SiLinkedin color="gray" size="1.4em" />{" "}
          <input
            className={classes.social_link_input}
            placeholder="www.linkedin.com"
          />
        </div>
        <div className={classes.wallet_button}>
          <SaveButton color="primary">Save</SaveButton>
        </div>
      </div>
    </div>
  );
}
