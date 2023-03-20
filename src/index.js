import store from "./Redux/reduxStore";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "theme-ui";
import theme from "./components/Global/Theme";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </BrowserRouter>
);
