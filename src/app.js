import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { useAuthUser } from "./contexts/UserContext";

import FullPageLoader from "./components/FullPageLoader";
import FullPageMessage from "./components/FullPageMessage";

import PageMainLogged from "./pages/PageMainLogged/PageMainLogged";
import PageLogin from "./pages/PageLogin";
import PageCreateAccount from "./pages/PageCreateAccount";
import PageRecoverPassword from "./pages/PageRecoverPassword/PageRecoverPassword";

import MainPage from "./components/MainPage";
import AppCountingPage from "./components/AppCountingPage";

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

export const App = () => {
  // global state
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [hasInfo, setHasInfo] = React.useState(false);
  const [infoMessage, setInfoMessage] = React.useState("");
  const [procedures, setProcedures] = React.useState(null);

  const { isUserLoged, setUser, clearUser } = useAuthUser();

  const fetchProcedures = React.useCallback(async () => {
    const procedures = await getAllProcedures();
    setProcedures(() => procedures);
  }, []);

  const onUserLogIn = React.useCallback(() => {
    const token = getIdToken();
    if (!token) return;
    const user = decodeToken(token);

    // @TODO replace this token decoding with request for user data
    setUser({
      userFirstName: "",
      userEmail: user.email,
      userAvatar: "",
    });

    fetchProcedures();
  }, [setUser, fetchProcedures]);

  const onClickLogOut = React.useCallback(async () => {
    await logOut();
    clearUser();
  }, []);

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

  const navigate = useNavigate();

  const onClickAppPage = React.useCallback(
    () => navigate("app-page"),
    [navigate]
  );

  const onClickDBPage = React.useCallback(
    () => navigate("db-page"),
    [navigate]
  );

  const onClickStatisticPage = React.useCallback(
    () => navigate("statistic-page"),
    [navigate]
  );

  return (
    <>
      {isUserLoged ? (
        <Routes>
          <Route
            path={"/app-page"}
            element={
              <PageMainLogged
                contentMain={<AppCountingPage />}
                onClickLogOut={onClickLogOut}
              />
            }
          />
          <Route
            path={"*"}
            element={
              <PageMainLogged
                contentMain={
                  <MainPage
                    onClickAppPage={onClickAppPage}
                    onClickDBPage={onClickDBPage}
                    onClickStatistic={onClickStatisticPage}
                  />
                }
                onClickLogOut={onClickLogOut}
              />
            }
          />
        </Routes>
      ) : null}

      {!isUserLoged ? (
        <Routes>
          <Route
            path={"*"}
            element={<PageLogin onClickLogin={onClickLogin} />}
          />

          <Route
            path={"/create-account"}
            element={
              <PageCreateAccount onClickCreateAccount={onClickCreateAccount} />
            }
          />

          <Route
            path={"/recover-password"}
            element={<PageRecoverPassword onClickRecover={onClickRecover} />}
          />
        </Routes>
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
