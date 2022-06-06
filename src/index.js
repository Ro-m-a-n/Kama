import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  { id: 1, text: "True way of Samurai", likes: 5 },
  { id: 2, text: "I finaly understood props", likes: 100 },
];
let dialogsData = [
  { id: 1, name: "Roman" },
  { id: 2, name: "Artem" },
];
let messagesData = [
  { id: 1, text: "Hello world" },
  { id: 2, text: "Hi there" },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
