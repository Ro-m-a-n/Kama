import store from "./redux/State";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={store.addPost.bind(store)}
          updateTextArea={store.updateTextArea.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
  reportWebVitals(store.getState());
};
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
