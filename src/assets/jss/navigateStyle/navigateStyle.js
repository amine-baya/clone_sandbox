const blackColor = "#000";

const hexToRgb = (input) => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error("input is not a valid hex color.");
  }
  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase(input);
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return (
    parseInt(first, 10) +
    ", " +
    parseInt(second, 10) +
    ", " +
    parseInt(last, 10)
  );
};

const navigateHolderStyle = {
  navigateContainer: {
    borderRadius: "6px",
    boxShadow: "0 17px 12px 0px rgba(" + hexToRgb(blackColor) + ", 0.03)",
    fontFamily: "Roboto, sans-serif",
    height: "100%",
    "@media (min-width: 1000px)": {
      height: "30%"
    }
  },
  ulNavigate: {
    listStyle: "none",
    paddingLeft: "0"
  },
  liNavigate: {
    "&:hover,&:focus": {
      color: "#e52d27",
      backgroundColor: "#ff000008",
      cursor: "pointer"
    },
    padding: "10px 20px"
  },
  liNavigateActive: {
    color: "#e52d27",
    backgroundColor: "#ff000008",
    cursor: "pointer",
    padding: "10px 20px"
  }
};

export default navigateHolderStyle;
