import React, { useState } from "react";
// @material-ui/core components
import { makeStyles, Switch } from "@material-ui/core";
import bodyProfileStyle from "../../assets/jss/profileStyle/bodyProfileStyle.js";

const useStyles = makeStyles(bodyProfileStyle);

export default function HeaderProfile() {
  const classes = useStyles();
  const [switched, setSwitched] = useState(false);

  return (
    <div className={classes.body_grid}>
      <div>
        <h3 className={classes.body_title}>Custodian Information</h3>
        <div>
          <label>Full Name</label>
          <input
            className={classes.body_input}
            placeholder="first name and last name"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            className={classes.body_input}
            placeholder="professional email"
            required
          />
        </div>
        <div>
          <label>Position</label>
          <input
            className={classes.body_input}
            placeholder="Position"
            required
          />
        </div>
      </div>
      <div>
        <div className={classes.switch_section}>
          <span className={switched === false && classes.switch_color}>
            Company
          </span>
          <Switch
            onClick={() => {
              setSwitched(!switched);
            }}
            style={{ color: "red" }}
          />
          <span className={switched === true && classes.switch_color}>
            Not-for-profit
          </span>
        </div>

        <div>
          <label>Name</label>
          <input className={classes.body_input} placeholder="name" required />
        </div>
        <div>
          <label>Address </label>
          <input
            className={classes.body_input}
            placeholder="street, postcode, city, country."
            required
          />
        </div>
        <div>
          <label>Website</label>
          <input
            className={classes.body_input}
            placeholder="www.example.com"
            required
          />
        </div>
      </div>
    </div>
  );
}
