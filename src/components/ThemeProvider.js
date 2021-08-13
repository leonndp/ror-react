import {
  createTheme,
  makeStyles,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";

import theme from "./../theme";

const ThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={createTheme(theme)}>{children}</MuiThemeProvider>
  );
};

export default ThemeProvider;
