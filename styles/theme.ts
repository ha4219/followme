import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme({
  // palette: {
  //   primary: deepPurple,
  //   secondary: amber,
  // },
  palette: {
    primary: {
      light: "#757ce8",
      // light: "#191919",
      // main: "#3f50b5",
      main: "#000000",
      // dark: "#002884",
      dark: "#000000",
      contrastText: "#ffffff",
      // contrastText: "#191919"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: ["paybooc-Bold"].join(","),
  },
});

theme = responsiveFontSizes(theme);

export default theme;
