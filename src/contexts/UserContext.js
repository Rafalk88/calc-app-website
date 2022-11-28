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
  clearUser: errorProviderNotFound,
  setUser: errorProviderNotFound,
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

  const clearUser = React.useCallback(() => {
    setIsUserLoged(() => false);
    setUserFirstName(() => "");
    setUserEmail(() => "");
    setUserAvatar(() => "");
  }, []);

  const setUser = React.useCallback((user) => {
    setIsUserLoged(() => true);
    if (user.userFirstName !== undefined)
      setUserFirstName(() => user.userFirstName);
    if (user.userEmail !== undefined) setUserEmail(() => user.userEmail);
    if (user.userAvatar !== undefined) setUserAvatar(() => user.userAvatar);
  }, []);

  return (
    <UserContext.Provider
      value={{
        isUserLoged,
        userFirstName,
        userEmail,
        userAvatar,
        clearUser,
        setUser,
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
