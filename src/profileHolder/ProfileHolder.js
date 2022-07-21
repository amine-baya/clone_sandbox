import React from "react";
import BodyProfile from "../component/profileComponents/BodyProfile";
import HeaderProfile from "../component/profileComponents/HeaderProfile";
import SocialProfile from "../component/profileComponents/SocialProfile";
import WalletProfile from "../component/profileComponents/WalletProfile";
import { makeStyles } from "@material-ui/core";

import mediaStyle from "../assets/jss/profileStyle/mediaStyle.js";

const useStyles = makeStyles(mediaStyle);

export default function ProfileHolder() {
  const classes = useStyles();

  return (
    <div className={classes.mainContainer}>
      <HeaderProfile />
      <BodyProfile />
      <SocialProfile />
      <WalletProfile />
    </div>
  );
}
