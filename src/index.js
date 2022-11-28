import React from "react";
import ReactDOM from "react-dom";

import {
  LogedRouterContextProvider,
  NotLogedRouterContextProvider,
} from "./contexts/RouterContext";
import UserContextProvider from "./contexts/UserContext";
import App from "./App";

import "./index.css";

ReactDOM.render(
  <UserContextProvider>
    <NotLogedRouterContextProvider>
      <LogedRouterContextProvider>
        <App />
      </LogedRouterContextProvider>
    </NotLogedRouterContextProvider>
  </UserContextProvider>,
  document.getElementById("root")
);
