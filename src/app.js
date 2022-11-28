import React from "react";

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

export class App extends React.Component {
  state = {
    // global state
    isLoading: false,
    hasError: false,
    errorMessage: "",
    hasInfo: false,
    infoMessage: "",
    procedures: null,

    // router state
    notLoginUserRoute: "LOGIN", // "CREATE-ACCOUNT", "RECOVER-PASSWORD"
    logedUserRoute: "WELCOME-PAGE", // "APP-PAGE", "DB-PAGE", "SETTINGS-PAGE"

    // user/auth state
    isUserLoged: false,
    userFirstName: "",
    userEmail: "",
    userAvatar: "",

    // user dropdown
    isUserDropdownOpen: false,

    // counting app state
    timeInput: "",
    procedureInput: ["", "", "", "", ""],

    // editDatabase state
    searchPhrase: "",
    outputData: ["", "", ""],
  };

  onClickLogin = async (email, password) => {
    this.setState(() => ({ isLoading: true }));
    try {
      await signIn(email, password);
      this.onUserLogIn();
    } catch (error) {
      const errorMessage = handleHTTPErrors(error.data.error.message);
      this.setState(() => ({
        hasError: true,
        errorMessage: errorMessage,
      }));
    } finally {
      this.setState(() => ({ isLoading: false }));
    }
  };

  onClickLogOut = async () => {
    await logOut();
    this.setState(() => ({
      isUserLoged: false,
      userFirstName: "",
      userEmail: "",
      userAvatar: "",
    }));
  };

  onClickCreateAccount = async (email, password) => {
    try {
      await signUp(email, password);
      this.setState(() => ({
        hasInfo: true,
        infoMessage: CREATE_ACCOUNT_SUCCESS_INFO,
      }));
      this.onUserLogIn();
    } catch (error) {
      const errorMessage = handleHTTPErrors(error.data.error.message);
      this.setState(() => ({
        hasError: true,
        errorMessage: errorMessage,
      }));
    } finally {
      this.setState(() => ({ isLoading: false }));
    }
  };

  onClickRecover = async (email) => {
    try {
      await sendPasswordResetEmail(email);
      this.setState(() => ({
        hasInfo: true,
        infoMessage: RECOVER_PASSWORD_SUCCESS_INFO,
      }));
    } catch (error) {
      const errorMessage = handleHTTPErrors(error.data.error.message);
      this.setState(() => ({
        hasError: true,
        errorMessage: errorMessage,
      }));
    } finally {
      this.setState(() => ({ isLoading: false }));
    }
  };

  dismissError = () => {
    this.setState(() => ({
      hasError: false,
      errorMessage: "",
    }));
  };

  dismissInfo = () => {
    this.setState(() => ({
      hasInfo: false,
      infoMessage: "",
    }));
  };

  fetchProcedures = async () => {
    const procedures = await getAllProcedures();
    this.setState(() => ({
      procedures: procedures,
    }));
  };

  onUserLogIn = () => {
    const token = getIdToken();
    if (!token) return;
    const user = decodeToken(token);

    // @TODO replace this token decoding with request for user data
    this.setState(() => ({
      isUserLoged: true,
      userFirstName: "",
      userEmail: user.email,
      userAvatar: "",
    }));

    this.fetchProcedures();
  };

  async componentDidMount() {
    this.setState(() => ({ isLoading: true }));
    const userIsLogedIn = await checkIfUserIsLoggedIn();
    this.setState(() => ({ isLoading: false }));
    if (userIsLogedIn) this.onUserLogIn();
  }

  render() {
    const {
      isLoading,
      hasError,
      errorMessage,
      hasInfo,
      infoMessage,
      notLoginUserRoute,
      logedUserRoute,
      isUserLoged,
      userFirstName,
      userEmail,
      userAvatar,
      isUserDropdownOpen,
    } = this.state;
    return (
      <>
        {isUserLoged ? (
          <MainLayout
            contentAppBar={
              <>
                <Logo className={classes.logo} />
                <User
                  className={classes.user}
                  userFirstName={userFirstName}
                  userEmail={userEmail}
                  userAvatar={userAvatar}
                  onOpenRequested={() =>
                    this.setState(() => ({
                      isUserDropdownOpen: true,
                    }))
                  }
                  onCloseRequested={() =>
                    this.setState(() => ({
                      isUserDropdownOpen: false,
                    }))
                  }
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
                          onClick={this.onClickLogOut}
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
                  userName={userFirstName}
                  onClickAppPage={() =>
                    this.setState(() => ({
                      logedUserRoute: "APP-PAGE",
                    }))
                  }
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
          <PageLogin
            onClickLogin={this.onClickLogin}
            onClickCreateAccountPage={() =>
              this.setState(() => ({ notLoginUserRoute: "CREATE-ACCOUNT" }))
            }
            onClickRecoverPasswordPage={() =>
              this.setState(() => ({ notLoginUserRoute: "RECOVER-PASSWORD" }))
            }
          />
        ) : notLoginUserRoute === "CREATE-ACCOUNT" ? (
          <PageCreateAccount
            onClickCreateAccount={this.onClickCreateAccount}
            onClickBackToLogin={() =>
              this.setState(() => ({ notLoginUserRoute: "LOGIN" }))
            }
          />
        ) : notLoginUserRoute === "RECOVER-PASSWORD" ? (
          <PageRecoverPassword
            onClickRecover={this.onClickRecover}
            onClickBackToLogin={() =>
              this.setState(() => ({ notLoginUserRoute: "LOGIN" }))
            }
          />
        ) : null}
        {isLoading ? <FullPageLoader /> : null}
        {hasInfo ? (
          <FullPageMessage
            iconVariant={"info"}
            message={infoMessage}
            buttonLabel={"OK"}
            onButtonClick={this.dismissInfo}
          />
        ) : null}
        {hasError ? (
          <FullPageMessage
            iconVariant={"error"}
            message={errorMessage}
            onButtonClick={this.dismissError}
          />
        ) : null}
      </>
    );
  }
}

export default App;
