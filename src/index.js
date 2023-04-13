import store from "./Redux/reduxStore";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "theme-ui";
import theme from "./components/Global/Theme";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </HashRouter>
);
