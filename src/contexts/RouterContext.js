import React from "react";
import PropTypes from "prop-types";

const initialContextNotLogedState = {
  // "CREATE-ACCOUNT", "RECOVER-PASSWORD"
  route: "LOGIN",
  setRoute: () => {
    console.log("NotLogedRouterContext.Provider not found");
  },
};

const initialContextLogedState = {
  // "APP-PAGE", "DB-PAGE", "SETTINGS-PAGE"
  route: "WELCOME-PAGE",
  setRoute: () => {
    console.log("LogedRouterContext.Provider not found");
  },
};

export const NotLogedRouterContext = React.createContext(
  initialContextNotLogedState.route
);

export const LogedRouterContext = React.createContext(
  initialContextLogedState.route
);

export const useNotLogedRouteTo = () => {
  const { setRoute } = React.useContext(NotLogedRouterContext);
  return setRoute;
};

export const useLogedRouteTo = () => {
  const { setRoute } = React.useContext(LogedRouterContext);
  return setRoute;
};

export const NotLogedRouterContextProvider = (props) => {
  const { children } = props;
  const [route, setRoute] = React.useState(initialContextNotLogedState.route);

  return (
    <NotLogedRouterContext.Provider
      value={{
        route,
        setRoute,
      }}
    >
      {children}
    </NotLogedRouterContext.Provider>
  );
};

export const LogedRouterContextProvider = (props) => {
  const { children } = props;
  const [route, setRoute] = React.useState(initialContextLogedState.route);

  return (
    <LogedRouterContext.Provider
      value={{
        route,
        setRoute,
      }}
    >
      {children}
    </LogedRouterContext.Provider>
  );
};

NotLogedRouterContextProvider.propTypes = {
  children: PropTypes.node,
};

LogedRouterContextProvider.propTypes = {
  children: PropTypes.node,
};