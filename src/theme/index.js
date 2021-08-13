import palette from "./palette";

const theme = {
  overrides: {
    MuiFilledInput: {
      root: {
        backgroundColor: "white",
      },
    },
    MuiButton: {
      root: {
        textTransform: "none",
        fontWeight: 700,
      },
    },
  },
  typography: {
    fontFamily: "Sansation",
  },
  palette,
};

export default theme;
