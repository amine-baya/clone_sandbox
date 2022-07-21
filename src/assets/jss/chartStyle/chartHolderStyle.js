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
    parseInt(first, 16) +
    ", " +
    parseInt(second, 16) +
    ", " +
    parseInt(last, 16)
  );
};

const chartHolderStyle = {
  mainContainer: {
    "@media (min-width: 100px)": {
      maxWidth: "350px"
    },
    "@media (min-width: 768px)": {
      maxWidth: "620px",
      gridTemplateColumns: "20% 80%"
    },
    "@media (min-width: 992px)": {
      maxWidth: "860px"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "900px"
    },
    margin: "70px auto",
    display: "grid",

    gap: "2rem",
    fontFamily: "Roboto, sans-serif"
  }
};

export default chartHolderStyle;
