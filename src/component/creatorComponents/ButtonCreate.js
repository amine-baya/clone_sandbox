import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import styles from "../../assets/jss/creatorStyle/buttonStyle.js";
import { useWeb3ExecuteFunction } from "react-moralis";
import { abi } from "../../constants/abi.js";
import { useMoralisFile } from "react-moralis";

const useStyles = makeStyles(styles);
export default function ButtonCreate(props) {
  const { title, img, description, ischecked, children, ...rest } = props;
  const classes = useStyles();
  const { saveFile } = useMoralisFile();

  const { fetch } = useWeb3ExecuteFunction({
    abi: abi,
    contractAddress: "0x8dCBCf3be31E2b4594701Afdc31832534aB714ce",
    functionName: "createAmp",
    params: {
      _name: "AMP",
      _id: 1,
      _price: 1,
      _amount: 1
    }
  });

  const btoa2 = function (str) {
    return Buffer.from(str).toString("base64");
  };

  const uploadMetadata = (title, description) => {
    console.log("two");

    const base64 = {
      Title: title,
      Description: description
    };

    const metadata = btoa2(JSON.stringify(base64));
    saveFile(
      "metadataFile.json",
      { metadata },
      {
        type: "base64",
        onSuccess: (result) => console.log(result),
        onError: (error) => console.log(metadata)
      }
    );
  };

  const fetchValidation = async () => {
    if (title && description && img && ischecked) {
      //const image = await uploadFile(img);
      console.log("one");

      uploadMetadata(title, description);
      fetch();
    }
  };

  return (
    <Button
      {...rest}
      className={classes.button}
      onClick={() => fetchValidation()}
    >
      {children}
    </Button>
  );
}
