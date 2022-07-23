import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const base = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#E7FAFE",
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    button: {
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 16,
  },
  props: {
    MuiAppBar: {
      color: "transparent",
    },
  },
});

const theme = responsiveFontSizes(base);

export default theme;
