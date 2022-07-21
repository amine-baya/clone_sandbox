const socialProfileStyle = {
  social_grid: {
    marginTop: "30px"
  },
  social_link_grid: {
    display: "grid",
    gridTemplateColumns: "100% ",
    justifyContent: "space-between",
    "@media (min-width: 778px)": {
      gridTemplateColumns: "80% 20%"
    }
  },
  social_link: {
    width: "100%",
    border: "1px solid gray",
    padding: "0 10px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    marginBottom: "20px"
  },
  social_link_input: {
    marginLeft: "10px",
    padding: "15px 0",
    width: "100%",
    border: "none",
    outline: "none",
    color: "#e52d27"
  },
  wallet_button: {
    marginLeft: "0%",
    "@media (min-width: 778px)": {
      marginLeft: "30%"
    }
  }
};

export default socialProfileStyle;
