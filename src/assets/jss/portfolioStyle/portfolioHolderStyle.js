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

const portfolioHolderStyle = {
  mainContainer: {
    "@media (min-width: 100px)": {
      maxWidth: "440px"
    },
    "@media (min-width: 768px)": {
      maxWidth: "620px"
    },
    "@media (min-width: 992px)": {
      maxWidth: "860px"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "900px"
    },
    margin: "70px auto",

    display: "grid",
    fontFamily: "Roboto, sans-serif",
    "@media (min-width: 1000px)": {
      gridTemplateColumns: "20% 80%",
      gap: "2rem"
    }
  },
  portfolioContainer: {
    margin: "0 auto",
    fontFamily: "Roboto, sans-serif",
    borderRadius: "6px",
    boxShadow: "0 17px 12px 0px rgba(" + hexToRgb(blackColor) + ", 0.03)",

    padding: "20px"
  },
  boxContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "2rem",
    "@media (max-width: 576px)": {
      gridTemplateColumns: "1fr "
    },

    "@media (min-width: 577px) and (max-width: 768px)": {
      gridTemplateColumns: "repeat(2,1fr)"
    }
  }
};

export default portfolioHolderStyle;
