import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      light: "#80cbc4",
      main: "#009688",
      dark: "#004d40",
      contrastText: "#fff",
    },
    secondary: {
      light: "#bcaaa4",
      main: "#795548",
      dark: "#3e2723",
      contrastText: "#000",
    },
    error: {
      main: red.A400,
    },
    background: {
      paper: "#e5f9f4",
      default: "#9bbab8",
    },
    action: {
      active: "#1f99eb",
      hover: "#1876ea",
      focus: "#5eb7f3",
      selected: "#41eb1f",
    },
  },
});

export default theme;
