import state from './redux/State';
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { addPost, updateTextArea, subscribe } from "./redux/State";
import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = (state) => {
 
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} addPost={addPost} updateTextArea={updateTextArea}/>
      </BrowserRouter>
    </React.StrictMode>
  );
  reportWebVitals(state);
};
rerenderEntireTree(state)
subscribe (rerenderEntireTree);
