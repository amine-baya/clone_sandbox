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

const lineChartsStyle = {
  lineChartsContainer: {
    borderRadius: "6px",
    boxShadow: "0 17px 12px 0px rgba(" + hexToRgb(blackColor) + ", 0.03)",
    width: "90%",
    margin: "10px auto"
  },
  lineChartHeader: {
    marginBottom: "0",
    fontWeight: "530",
    marginLeft: "15px"
  },
  lineChartBody: {
    padding: "0 30px"
  },
  lineChartInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
    color: "#b9b7b7",
    padding: "0 20px",
    margin: "20px 0",
    "@media (max-width: 768px)": {
      fontSize: "12px"
    }
  },
  lineChartInfoOption: {
    backgroundColor: "#b9b7b7",
    marginLeft: "6px",
    padding: "4px",
    borderRadius: "2px",
    color: "#979090"
  },
  lineChartButtons: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    textAlign: "center",

    "@media (max-width: 768px)": {
      fontSize: "12px"
    }
  },
  lineChartButton: {
    border: "1px solid #ededed",
    textAlign: "center",
    padding: "8% 10% ",
    cursor: "pointer",
    color: "#b9b7b7",
    display: "flex",
    justifyContent: "center"
  },
  lineChartIcon: {
    marginRight: "5px"
  }
};

export default lineChartsStyle;
