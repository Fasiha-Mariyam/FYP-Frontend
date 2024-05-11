import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#0F6CBD',
    },
    success: {
      main: '#5CC44B',
    },
    erorr: {
      main: '#E43232',
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default theme;


// light :b7d3eb
// dark: #0F6CBD;
