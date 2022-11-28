import React from "react";
import ReactDOM from "react-dom";

import {
  LogedRouterContextProvider,
  NotLogedRouterContextProvider,
} from "./contexts/RouterContext";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <NotLogedRouterContextProvider>
    <LogedRouterContextProvider>
      <App />
    </LogedRouterContextProvider>
  </NotLogedRouterContextProvider>,
  document.getElementById("root")
);
