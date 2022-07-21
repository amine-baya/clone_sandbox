const bodyProfileStyle = {
  body_grid: {
    marginTop: "30px",
    display: "grid",
    gridTemplateColumns: "100%",
    "@media (min-width: 778px)": {
      gridTemplateColumns: "47% 47%"
    },
    justifyContent: "space-between",
    paddingBottom: "20px",
    borderBottom: "6px solid #8080801c"
  },
  body_input: {
    display: "block",
    width: "100%",
    padding: "15px 10px",
    borderRadius: "5px",
    outline: "none",
    border: "1px solid gray",
    margin: "5px 0 20px",
    color: "#e52d27"
  },
  switch_section: {
    marginBottom: "20px",
    transform: "translateY(13px)"
  },
  switch_color: {
    color: "#e52d27"
  }
};

export default bodyProfileStyle;
