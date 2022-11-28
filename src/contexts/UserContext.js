import React from "react";
import PropTypes from "prop-types";

const errorProviderNotFound = () => {
  console.log("UserContext.Provider not found");
};

const initialContextState = {
  isUserLoged: false,
  userFirstName: "",
  userEmail: "",
  userAvatar: "",
  setIsUserLoged: errorProviderNotFound,
  setUserFirstName: errorProviderNotFound,
  setUserEmail: errorProviderNotFound,
  setUserAvatar: errorProviderNotFound,
};

export const UserContext = React.createContext(initialContextState.route);

export const useAuthUser = () => {
  const authUserContextValue = React.useContext(UserContext);
  return authUserContextValue;
};

export const UserContextProvider = (props) => {
  const { children } = props;

  const [isUserLoged, setIsUserLoged] = React.useState(
    initialContextState.isUserLoged
  );
  const [userFirstName, setUserFirstName] = React.useState(
    initialContextState.userFirstName
  );
  const [userEmail, setUserEmail] = React.useState(
    initialContextState.userEmail
  );
  const [userAvatar, setUserAvatar] = React.useState(
    initialContextState.userAvatar
  );

  return (
    <UserContext.Provider
      value={{
        isUserLoged,
        userFirstName,
        userEmail,
        userAvatar,
        setIsUserLoged,
        setUserFirstName,
        setUserEmail,
        setUserAvatar,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

UserContextProvider.propTypes = {
  children: PropTypes.node,
};
