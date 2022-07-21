const redColor = "#e52d27";
const whiteColor = "#ffffff";

const buttonStyle = {
  button: {
    minHeight: "auto",
    minWidth: "auto",
    backgroundColor: redColor,
    color: whiteColor,
    border: "none",
    borderRadius: "10px",
    padding: "10px 30px",
    marginBottom: "30px",
    marginTop: "30px",
    fontSize: "18px",
    fontWeight: "500",
    fontFamily: "Roboto, sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0",
    textAlign: "center",
    whiteSpace: "nowrap",
    cursor: "pointer",
    width: "50%",
    "&:hover,&:focus": {
      color: whiteColor,
      backgroundColor: redColor
    },
    fontWeight: "bold"
  }
};

export default buttonStyle;
