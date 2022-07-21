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

const headerStyle = {
  header: {
    backgroundColor: "#b9b7b7",
    height: "100px",
    width: "100%",
    display: "flex",
    justifyContent: "space-around"
  },
  ul: {
    display: "flex",
    alignItems: "center",
    margin: "20px ",
    listStyle: "none"
  },
  li: {
    paddingLeft: "20px"
  }
};

export default headerStyle;
