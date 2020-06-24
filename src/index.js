import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import  "./App.css";
import MyApp from "./components/MyApp";
// src\components\MyApp.jsx
import * as serviceWorker from "./serviceWorker";
import "@fortawesome/fontawesome-free/css/all.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <MyApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
