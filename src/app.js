import React from "react";

import {
  useNotLogedRoute,
  useLogedRoute,
  useLogedRouteTo,
} from "./contexts/RouterContext";
import { useAuthUser } from "./contexts/UserContext";
import FullPageLoader from "./components/FullPageLoader";
import FullPageMessage from "./components/FullPageMessage";
import MainLayout from "./components/MainLayout";
import Logo from "./components/LoginForm/Logo";
import User from "./components/User";
import List from "./components/List";
import ListItem from "./components/ListItem/ListItem";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";
import AppCountingPage from "./components/AppCountingPage";
import PageLogin from "./pages/PageLogin";
import PageCreateAccount from "./pages/PageCreateAccount";
import PageRecoverPassword from "./pages/PageRecoverPassword/PageRecoverPassword";

import {
  CREATE_ACCOUNT_SUCCESS_INFO,
  RECOVER_PASSWORD_SUCCESS_INFO,
} from "./consts";

import {
  signIn,
  signUp,
  getIdToken,
  decodeToken,
  checkIfUserIsLoggedIn,
  sendPasswordResetEmail,
  logOut,
} from "./auth";

import { handleHTTPErrors } from "./handleHTTPErrors";
import { getAll as getAllProcedures } from "./components/api/procedures";

import classes from "./styles.module.css";

export const App = () => {
  // global state
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [hasInfo, setHasInfo] = React.useState(false);
  const [infoMessage, setInfoMessage] = React.useState("");
  const [procedures, setProcedures] = React.useState(null);

  // router state
  const notLoginUserRoute = useNotLogedRoute();
  const logedUserRoute = useLogedRoute();

  // user dropdown
  const [isUserDropdownOpen, setIsUserDropdownOpen] = React.useState(false);

  // counting app state
  const [timeInput, setTimeInput] = React.useState("");
  const [procedureInput, setProcedureInput] = React.useState([
    "",
    "",
    "",
    "",
    "",
  ]);

  // editDatabase state
  const [searchPhrase, setSearchPhrase] = React.useState("");
  const [outputData, setOutputData] = React.useState(["", "", ""]);

  const routeTo = useLogedRouteTo();
  const onClickAppPage = React.useCallback(() => {
    routeTo("APP-PAGE");
  }, [routeTo]);

  const {
    isUserLoged,
    setIsUserLoged,
    setUserFirstName,
    setUserEmail,
    setUserAvatar,
  } = useAuthUser();

  const fetchProcedures = React.useCallback(async () => {
    const procedures = await getAllProcedures();
    setProcedures(() => procedures);
  }, []);

  const onUserLogIn = React.useCallback(() => {
    const token = getIdToken();
    if (!token) return;
    const user = decodeToken(token);

    // @TODO replace this token decoding with request for user data
    setIsUserLoged(() => true);
    setUserFirstName(() => "");
    setUserEmail(() => user.email);
    setUserAvatar(() => "");

    fetchProcedures();
  }, [
    setIsUserLoged,
    setUserFirstName,
    setUserEmail,
    setUserAvatar,
    fetchProcedures,
  ]);

  const handleAsyncAction = React.useCallback(
    async (asyncAction) => {
      setIsLoading(() => true);
      try {
        await asyncAction();
      } catch (error) {
        const errorMessage = handleHTTPErrors(error.data.error.message);
        setHasError(() => true);
        setErrorMessage(() => errorMessage);
      } finally {
        setIsLoading(() => false);
      }
    },
    [handleHTTPErrors]
  );

  const onClickLogin = React.useCallback(
    async (email, password) => {
      handleAsyncAction(async () => {
        await signIn(email, password);
        onUserLogIn();
      });
    },
    [handleAsyncAction, onUserLogIn]
  );

  const onClickLogOut = React.useCallback(async () => {
    await logOut();
    setIsUserLoged(() => false);
    setUserFirstName(() => "");
    setUserEmail(() => "");
    setUserAvatar(() => "");
    setIsUserDropdownOpen(() => false);
  }, [
    setIsUserLoged,
    setUserFirstName,
    setUserEmail,
    setUserAvatar,
    setIsUserDropdownOpen,
  ]);

  const onClickCreateAccount = React.useCallback(
    async (email, password) => {
      handleAsyncAction(async () => {
        await signUp(email, password);
        setHasInfo(() => true);
        setInfoMessage(() => CREATE_ACCOUNT_SUCCESS_INFO);
        onUserLogIn();
      });
    },
    [handleAsyncAction, onUserLogIn]
  );

  const onClickRecover = React.useCallback(
    async (email) => {
      handleAsyncAction(async () => {
        await sendPasswordResetEmail(email);
        setHasInfo(() => true);
        setInfoMessage(() => RECOVER_PASSWORD_SUCCESS_INFO);
      });
    },
    [handleAsyncAction]
  );

  const dismissError = React.useCallback(() => {
    setHasError(() => false);
    setErrorMessage(() => "");
  }, []);

  const dismissInfo = React.useCallback(() => {
    setHasInfo(() => false);
    setInfoMessage(() => "");
  }, []);

  React.useEffect(() => {
    (async () => {
      setIsLoading(() => true);
      const userIsLogedIn = await checkIfUserIsLoggedIn();
      setIsLoading(() => false);
      if (userIsLogedIn) onUserLogIn();
    })();
  }, []);

  return (
    <>
      {isUserLoged ? (
        <MainLayout
          contentAppBar={
            <>
              <Logo className={classes.logo} />
              <User
                className={classes.user}
                onOpenRequested={() => setIsUserDropdownOpen(() => true)}
                onCloseRequested={() => setIsUserDropdownOpen(() => false)}
                contentList={
                  isUserDropdownOpen ? (
                    <List>
                      <ListItem
                        icon={"settings"}
                        text={"Settings"}
                        disabled={true}
                      />
                      <ListItem
                        icon={"support"}
                        text={"Support"}
                        disabled={true}
                      />
                      <ListItem
                        icon={"log-out"}
                        text={"Log Out"}
                        onClick={onClickLogOut}
                      />
                    </List>
                  ) : null
                }
              />
            </>
          }
          contentMain={
            logedUserRoute === "WELCOME-PAGE" ? (
              <MainPage
                onClickAppPage={onClickAppPage}
                onClickDBPage={() => console.log("DBPageButton")}
                onClickStatistic={() => console.log("StatisticButton")}
              />
            ) : logedUserRoute === "APP-PAGE" ? (
              <AppCountingPage />
            ) : null
          }
          footer={<Footer />}
        />
      ) : notLoginUserRoute === "LOGIN" ? (
        <PageLogin onClickLogin={onClickLogin} />
      ) : notLoginUserRoute === "CREATE-ACCOUNT" ? (
        <PageCreateAccount onClickCreateAccount={onClickCreateAccount} />
      ) : notLoginUserRoute === "RECOVER-PASSWORD" ? (
        <PageRecoverPassword onClickRecover={onClickRecover} />
      ) : null}
      {isLoading ? <FullPageLoader /> : null}
      {hasInfo ? (
        <FullPageMessage
          iconVariant={"info"}
          message={infoMessage}
          buttonLabel={"OK"}
          onButtonClick={dismissInfo}
        />
      ) : null}
      {hasError ? (
        <FullPageMessage
          iconVariant={"error"}
          message={errorMessage}
          onButtonClick={dismissError}
        />
      ) : null}
    </>
  );
};

export default App;
