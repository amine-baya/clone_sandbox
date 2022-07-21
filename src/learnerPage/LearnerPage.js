import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import learnerPageStyle from "../assets/jss/learnerPageStyle/learnerPageStyle.js";

import Button from "../component/customButtons/Button.js";
import CustomRow from "../component/customRow/customRow.js";
import BubleChart from "../component/bubleChart/BubleChart.js";
import CustomRowEvent from "../component/customRowEvent/CustomRowEvent.js";

const useStyles = makeStyles(learnerPageStyle);
export default function LearnerPage() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.boxContainer}>
        <div>
          <div className={classes.headerBox}>
            <img
              src="../../images/header_img.jpg"
              className={classes.headerImg}
              alt="certificate"
            />
          </div>
          <div className={classes.gridStatistics}>
            <div className={classes.tableStatistics}>
              <CustomRow title="Create by:" info="Altus Blockchain" />
              <CustomRow title="Date:" info="10/01/2022" />
              <CustomRow title="Contract Address:" info="123456789" />
              <CustomRow title="Token ID:" info="A1B2C3D4E5F6G7H8" />
              <CustomRow title="Token Standard: " info="ERC-1155" />
              <CustomRow title="Blockchain:" info="Polygon" />
              <h4 className={classes.communityEventTitle}> Event:</h4>
              <div className={classes.customRowEventHeader}>
                <span>Event</span>
                <span>From</span>
                <span>To</span>
                <span>Date</span>
              </div>
              <CustomRowEvent
                event="Minted"
                from="Nul Address"
                to="283AFQ"
                date="2months ago"
              />
              <CustomRowEvent
                event="Transfer"
                from="283AFQ"
                to="you"
                date="2months ago"
              />
            </div>
            <div className={classes.communityEvent}>
              <h4 className={classes.communityEventTitle}> Community events</h4>
              <CustomRow title="Learners " info="223" />
              <CustomRow title="Last Event" info="22 February 2022" />

              <div className={classes.mapCommunityEvent}>
                <img
                  src="../../images/learner_map.jpg"
                  className={classes.headerImg}
                  alt="certificate"
                />
              </div>
            </div>
          </div>
          <div className={classes.bubleChart}>
            <BubleChart />
          </div>
        </div>

        <div className={classes.shareChart}>
          <Button color="primary">SHARE</Button>
        </div>
      </div>
    </div>
  );
}
