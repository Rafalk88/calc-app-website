import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import UserContextProvider from "./contexts/UserContext";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <Router>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </Router>,
  document.getElementById("root")
);
