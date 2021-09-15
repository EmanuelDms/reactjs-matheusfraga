import { createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: { main: "#4c89e3" },
  },
  typography: {
    fontFamily: "'Rubik', sans-serif",
    h1: {
      display: "block",
      fontSize: ".83em",
      fontWeight: "bold",
    },
    h4: {
      margin: "1rem 0",
      fontWeight: "bold",
    },
  },
});

export default theme;
