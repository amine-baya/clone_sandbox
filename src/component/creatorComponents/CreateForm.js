import React, { useState } from "react";

import { MdRecordVoiceOver } from "react-icons/md";
import { makeStyles, Switch } from "@material-ui/core";
import createFormStyle from "../../assets/jss/creatorStyle/createFormStyle.js";
import ButtonCreate from "./ButtonCreate.js";
import WalletCreator from "./WalletCreator.js";
import ReactHowler from "react-howler";

const useStyles = makeStyles(createFormStyle);

export default function Navigate() {
  const classes = useStyles();
  const [online, setOnline] = useState(false);
  const [onsite, setOnsite] = useState(false);
  const [exp, setExp] = useState(false);
  const [assessment, setAssessment] = useState(false);
  const [qualifications, setQualifications] = useState(false);
  const [audio, setAudio] = useState(false);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [ischecked, setIsChecked] = useState(false);
  const [number, setNumber] = useState();

  return (
    <div className={classes.createFormContainer}>
      <h2>Create</h2>
      <div className={classes.block}>
        <div>
          <h4>Your NFT token</h4>
          <label>Upload your NFT token avatar (350 x 350 PNG image)</label>
          <input
            className={classes.input_upload}
            type="file"
            id="fileInput"
            name="fileInput"
            onChange={(e) => setImg(e.target.files[0])}
            placeholder="https://www.yoursite.com/item"
          />
          <label htmlFor="fileInput" className={classes.label_upload}>
            Upload
          </label>
        </div>
        <div>
          <label>Title</label>
          <input
            className={classes.createForm_input}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Name"
          />
        </div>

        <div>
          <div>
            <label>Description</label>
            <textarea
              className={classes.createForm_textarea}
              placeholder="Description here"
              maxLength="140"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className={classes.block}>
        <h4>Your Digital Content</h4>

        <div>
          <label className={classes.top}>Text</label>
          <textarea
            className={classes.createForm_textarea}
            placeholder="Your text (10,000 characters max.)"
            maxLength="140"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className={classes.block}>
        <h4>The Learner path</h4>

        <div>
          <label>Upload Your Credential </label>
        </div>

        <input
          className={classes.input_upload}
          type="file"
          id="fileInput"
          name="fileInput"
          onChange={(e) => setImg(e.target.files[0])}
          placeholder="https://www.yoursite.com/item"
        />
        <label htmlFor="fileInput" className={classes.label_upload}>
          Upload
        </label>

        <div className={classes.switch_option}>
          <span
            className={
              online === false
                ? classes.switch_title
                : classes.switch_title_active
            }
          >
            online
          </span>
          <Switch
            onClick={() => {
              setOnline(!online);
            }}
            style={{ color: online ? "red" : "black" }}
          />
        </div>
        <div className={classes.switch_option}>
          <span
            className={
              onsite === false
                ? classes.switch_title
                : classes.switch_title_active
            }
          >
            onsite
          </span>
          <Switch
            onClick={() => {
              setOnsite(!onsite);
            }}
            style={{ color: onsite ? "red" : "black" }}
          />
        </div>
        <div className={classes.switch_option}>
          <span
            className={
              exp === false ? classes.switch_title : classes.switch_title_active
            }
          >
            work experience
          </span>
          <Switch
            onClick={() => {
              setExp(!exp);
            }}
            style={{ color: exp ? "red" : "black" }}
          />
        </div>

        <div className={classes.switch_option}>
          <span
            className={
              assessment === false
                ? classes.switch_title
                : classes.switch_title_active
            }
          >
            assessment
          </span>
          <Switch
            onClick={() => {
              setAssessment(!assessment);
            }}
            style={{ color: assessment ? "red" : "black" }}
          />
        </div>
        <div className={classes.switch_option}>
          <span
            className={
              qualifications === false
                ? classes.switch_title
                : classes.switch_title_active
            }
          >
            qualifications framework level
          </span>
          <Switch
            onClick={() => {
              setQualifications(!qualifications);
            }}
            style={{ color: qualifications ? "red" : "black" }}
          />
        </div>
        <div>
          <input
            disabled={qualifications ? false : true}
            className={classes.createForm_input}
          />
        </div>
      </div>

      <div className={classes.block}>
        <h4>Mint</h4>
        <div>
          <div className={classes.voiceRecord}>
            <label>Royalties to pay by each learner</label>
            <div onClick={() => setAudio(!audio)}>
              <MdRecordVoiceOver color="gray" size="1.4em" />
              <ReactHowler src="./audio/audio.mpeg" playing={audio} />
            </div>
          </div>
          <input type="number" className={classes.createForm_input} />
        </div>
        <div>
          <label>Number of NFT Ampersand tokens to mint</label>
          <input
            type="number"
            className={classes.createForm_input}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div>
          <p className={classes.toRight}>
            {" "}
            price ={" "}
            {number && number > 0
              ? `${(number * (-0.098 * Math.log(number) + 1)).toFixed(2)} $`
              : "0 $"}
          </p>
          <input
            type="checkbox"
            className={classes.acceptPrivacyCheck}
            onChange={() => setIsChecked(!ischecked)}
          />
          <p className={classes.acceptPrivacyParagraph}>
            By using the Service, you accept the Terms and Conditions.
          </p>
        </div>
        <div className={classes.createFormSave}>
          <ButtonCreate
            title={title}
            img={img}
            description={description}
            ischecked={ischecked}
          >
            MINT
          </ButtonCreate>
        </div>
        <div className={classes.createFormBlockchainGrid}>
          <div>
            <WalletCreator />
          </div>
        </div>
      </div>
    </div>
  );
}
