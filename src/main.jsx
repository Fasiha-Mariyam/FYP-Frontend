import React from "react";
import { ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SnackbarProvider } from "notistack";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import theme from "../theme";
import "./index.css";
import { persistor, store } from "./redux/store";
import App from "./routes";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> 
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SnackbarProvider maxSnack={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ThemeProvider>
          </LocalizationProvider>
        </SnackbarProvider>
      </PersistGate>
  </Provider>
  </React.StrictMode>
);
