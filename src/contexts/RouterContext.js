import React from "react";

export const NotLogedRouterContext = React.createContext({
  // "CREATE-ACCOUNT", "RECOVER-PASSWORD"
  notLogedRoute: "LOGIN",
  setNotLogedRoute: () => {
    console.log("NotLogedRouterContext.Provider not found");
  },
});

export const LogedRouterContext = React.createContext({
  // "APP-PAGE", "DB-PAGE", "SETTINGS-PAGE"
  logedRoute: "WELCOME-PAGE",
  setLogedRoute: () => {
    console.log("LogedRouterContext.Provider not found");
  },
});
