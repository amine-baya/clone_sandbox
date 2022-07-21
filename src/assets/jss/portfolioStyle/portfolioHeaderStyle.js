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

const portfolioHeaderStyle = {
  portfolioHeader: {
    display: "flex",
    justifyContent: "space-between",

    "@media (max-width: 576px)": {
      fontSize: "24px",
      flexDirection: "column"
    },
    "@media (min-width: 577px) and (max-width: 768px)": {
      fontSize: "28px",
      flexDirection: "column"
    },
    "@media (min-width: 769px) and (max-width: 992px)": {
      justifyContent: "space-between"
    },
    "@media (min-width: 993px) and (max-width: 1200px) ": {
      justifyContent: "space-between"
    }
  },
  portfolioHeaderTitle: {
    "@media (max-width: 576px)": {
      fontSize: "22px"
    },
    "@media (min-width: 577px) and (max-width: 768px)": {
      fontSize: "28px"
    }
  },
  portfolioHeaderInfo: {
    display: "flex",
    alignItems: "center"
  },
  portfolioHeaderInfoField: {
    backgroundColor: "#fbf7f7eb",
    marginLeft: "15px",
    padding: "10px",
    borderRadius: "8px",
    "@media (max-width: 576px)": {
      fontSize: "12px",
      marginBottom: "20px"
    },
    "@media (min-width: 577px) and (max-width: 768px)": {
      fontSize: "16px",
      marginBottom: "20px"
    }
  }
};

export default portfolioHeaderStyle;
