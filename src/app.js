import React from "react";
import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";

import FullPageLoader from "./components/FullPageLoader";
import FullPageMessage from "./components/FullPageMessage";
import FullPageLayout from "./components/FullPageLayout";
import LoginForm from "./components/LoginForm";
import CreateAccount from "./components/CreateAccount";
import RecoverPassword from "./components/RecoverPassword";
import AppBar from "./components/AppBar/AppBar";
import Logo from "./components/LoginForm/Logo";
import User from "./components/User";
import List from "./components/List";
import ListItem from "./components/ListItem/ListItem";

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

const EMAIL_VALIDATION_ERROR = "Please type valid E-mail.";
const PASSWORD_VALIDATION_ERROR = (
  <div>
    Password should be:
    <br /> - at least 8 chars, <br /> - min. 1 lower case char,
    <br /> - min. 1 uppercase char,
    <br /> - min. 1 number,
    <br /> - min. 1 symbol.
  </div>
);
const RECOVER_PASSWORD_VALIDATION_ERROR = "Passwords must be the same.";
const CREATE_ACCOUNT_SUCCESS_INFO = "User account created.";
const RECOVER_PASSWORD_SUCCESS_INFO = "Check Your inbox.";

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
    logedUserRoute: "WELCOME-PAGE", // "APP-PAGE", "DB-PAGE"

    // user/auth state
    isUserLoged: false,
    userFirstName: "",
    userEmail: "",
    userAvatar: "",

    // user dropdown
    isUserDropdownOpen: false,

    // login state
    loginEmail: "",
    loginEmailError: EMAIL_VALIDATION_ERROR,
    loginPassword: "",
    loginPasswordError: PASSWORD_VALIDATION_ERROR,
    loginSubmitted: false,

    // createAccount state
    createEmail: "",
    createEmailError: EMAIL_VALIDATION_ERROR,
    createPassword: "",
    createPasswordError: PASSWORD_VALIDATION_ERROR,
    createRepeatePassword: "",
    createPasswordRepeatError: RECOVER_PASSWORD_VALIDATION_ERROR,
    createSubmitted: false,

    // recover sate
    recoverPasswordEmail: "",
    recoverPasswordEmailError: EMAIL_VALIDATION_ERROR,
    recoverPasswordSubmitted: false,

    // counting app state
    timeInput: "",
    procedureInput: ["", "", "", "", ""],

    // editDatabase state
    searchPhrase: "",
    outputData: ["", "", ""],
  };

  onClickLogin = async () => {
    this.setState(() => ({ loginSubmitted: true }));
    if (this.state.loginEmailError || this.state.loginPasswordError) return;
    this.setState(() => ({ isLoading: true }));
    try {
      await signIn(this.state.loginEmail, this.state.loginPassword);
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

  onClickCreateAccount = async () => {
    this.setState(() => ({ createSubmitted: true }));
    if (
      this.state.createEmailError ||
      this.state.createPasswordError ||
      this.state.createPasswordRepeatError
    )
      return;
    this.setState(() => ({ isLoading: true }));
    try {
      await signUp(this.state.createEmail, this.state.createPassword);
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

  onClickRecover = async () => {
    this.setState(() => ({ recoverPasswordSubmitted: true }));
    if (this.state.recoverPasswordEmailError) return;
    this.setState(() => ({ isLoading: true }));
    try {
      await sendPasswordResetEmail(this.state.recoverPasswordEmail);
      this.setState(() => ({
        hasInfo: true,
        infoMessage: RECOVER_PASSWORD_SUCCESS_INFO,
      }));
    } catch (error) {
      //const errorMessage = handleHTTPErrors(error.data.error.message);
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
      loginEmail,
      loginEmailError,
      loginPassword,
      loginPasswordError,
      loginSubmitted,
      createEmail,
      createEmailError,
      createPassword,
      createPasswordError,
      createRepeatePassword,
      createPasswordRepeatError,
      createSubmitted,
      recoverPasswordEmail,
      recoverPasswordEmailError,
      recoverPasswordSubmitted,
      isUserLoged,
      userFirstName,
      userEmail,
      userAvatar,
      isUserDropdownOpen,
    } = this.state;
    return (
      <>
        {isUserLoged ? (
          <div>
            <AppBar>
              <Logo className={classes.logo} />
              <User
                className={classes.user}
                userFirstName={userFirstName}
                userEmail={userEmail}
                userAvatar={userAvatar}
                onClick={() =>
                  this.setState((prevState) => ({
                    isUserDropdownOpen: !prevState.isUserDropdownOpen,
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
            </AppBar>
          </div>
        ) : notLoginUserRoute === "LOGIN" ? (
          <FullPageLayout>
            <LoginForm
              email={loginEmail}
              emailError={loginSubmitted ? loginEmailError : undefined}
              passwordError={loginSubmitted ? loginPasswordError : undefined}
              password={loginPassword}
              onChangeEmail={(e) => {
                const { value } = e.target;
                this.setState(() => ({
                  loginEmail: value,
                  loginEmailError:
                    isEmail(value) || !value ? "" : EMAIL_VALIDATION_ERROR,
                }));
                if (!value) {
                  this.setState(() => ({ loginSubmitted: false }));
                }
              }}
              onChangePassword={(e) => {
                const { value } = e.target;
                this.setState(() => ({
                  loginPassword: value,
                  loginPasswordError:
                    isStrongPassword(value) || !value
                      ? ""
                      : PASSWORD_VALIDATION_ERROR,
                }));
                if (!value) {
                  this.setState(() => ({ loginSubmitted: false }));
                }
              }}
              onClickLogin={this.onClickLogin}
              onClickCreateAccount={() =>
                this.setState(() => ({ notLoginUserRoute: "CREATE-ACCOUNT" }))
              }
              onClickRecoverPassword={() =>
                this.setState(() => ({ notLoginUserRoute: "RECOVER-PASSWORD" }))
              }
            />
          </FullPageLayout>
        ) : notLoginUserRoute === "CREATE-ACCOUNT" ? (
          <CreateAccount
            email={createEmail}
            emailError={createSubmitted ? createEmailError : undefined}
            password={createPassword}
            passwordError={createSubmitted ? createPasswordError : undefined}
            repeatPassword={createRepeatePassword}
            repeatPasswordError={
              createSubmitted ? createPasswordRepeatError : undefined
            }
            onChangeEmail={(e) => {
              const { value } = e.target;
              this.setState(() => ({
                createEmail: value,
                createEmailError:
                  isEmail(value) || !value ? "" : EMAIL_VALIDATION_ERROR,
              }));
              if (!value) {
                this.setState(() => ({ createSubmitted: false }));
              }
            }}
            onChangePassword={(e) => {
              const { value } = e.target;
              this.setState(() => ({
                createPassword: value,
                createPasswordError:
                  isStrongPassword(value) || !value
                    ? ""
                    : PASSWORD_VALIDATION_ERROR,
                createPasswordRepeatError:
                  createPassword === value
                    ? ""
                    : RECOVER_PASSWORD_VALIDATION_ERROR,
              }));
              if (!value) {
                this.setState(() => ({ createSubmitted: false }));
              }
            }}
            onChangeRepeatPassword={(e) => {
              const { value } = e.target;
              this.setState(() => ({
                createRepeatePassword: value,
                createPasswordRepeatError:
                  createPassword === value
                    ? ""
                    : RECOVER_PASSWORD_VALIDATION_ERROR,
              }));
              if (!value) {
                this.setState(() => ({ createSubmitted: false }));
              }
            }}
            onClickCreateAccount={this.onClickCreateAccount}
            onClickBackToLogin={() =>
              this.setState(() => ({ notLoginUserRoute: "LOGIN" }))
            }
          />
        ) : notLoginUserRoute === "RECOVER-PASSWORD" ? (
          <RecoverPassword
            email={recoverPasswordEmail}
            emailError={
              recoverPasswordSubmitted ? recoverPasswordEmailError : undefined
            }
            onChangeEmail={(e) => {
              const { value } = e.target;
              this.setState(() => ({
                recoverPasswordEmail: value,
                recoverPasswordEmailError:
                  isEmail(value) || !value ? "" : EMAIL_VALIDATION_ERROR,
              }));
              if (!value) {
                this.setState(() => ({ recoverPasswordSubmitted: false }));
              }
            }}
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
