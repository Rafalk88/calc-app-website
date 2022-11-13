import React from "react";

import FullPageLoader from "./FullPageLoader/FullPageLoader";
import FullPageMessage from "./FullPageMessage/FullPageMessage";
import FullPageLayout from "./FullPageLayout/FullPageLayout";
import LoginForm from "./LoginForm";
import CreateAccount from "./CreateAccount";
import RecoverPassword from "./RecoverPassword";

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

    // login state
    loginEmail: "",
    loginPassword: "",

    // createAccount state
    createEmail: "",
    createPassword: "",
    createRepeatePassword: "",

    // recover sate
    recoverPasswordEmail: "",

    // counting app state
    timeInput: "",
    procedureInput: ["", "", "", "", ""],

    // editDatabase state
    searchPhrase: "",
    outputData: ["", "", ""],
  };

  render() {
    const {
      isLoading,
      hasError,
      errorMessage,
      hasInfo,
      infoMessage,
      notLoginUserRoute,
      loginEmail,
      loginPassword,
      createEmail,
      createPassword,
      createRepeatePassword,
      recoverPasswordEmail,
    } = this.state;
    return (
      <>
        {notLoginUserRoute === "LOGIN" ? (
          <FullPageLayout>
            <LoginForm
              email={loginEmail}
              password={loginPassword}
              onChangeEmail={(e) => {
                const { value } = e.target;
                this.setState(() => ({ loginEmail: value }));
              }}
              onChangePassword={(e) => {
                const { value } = e.target;
                this.setState(() => ({ loginPassword: value }));
              }}
              onClickLogin={() => console.log("onClickLogin")}
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
            password={createPassword}
            repeatPassword={createRepeatePassword}
            onChangeEmail={(e) => {
              const { value } = e.target;
              this.setState(() => ({ createEmail: value }));
            }}
            onChangePassword={(e) => {
              const { value } = e.target;
              this.setState(() => ({ createPassword: value }));
            }}
            onChangeRepeatPassword={(e) => {
              const { value } = e.target;
              this.setState(() => ({ createRepeatePassword: value }));
            }}
            onClickCreateAccount={() => console.log("onClickCreateAccount")}
            onClickBackToLogin={() =>
              this.setState(() => ({ notLoginUserRoute: "LOGIN" }))
            }
          />
        ) : notLoginUserRoute === "RECOVER-PASSWORD" ? (
          <RecoverPassword
            email={recoverPasswordEmail}
            onChangeEmail={(e) => {
              const { value } = e.target;
              this.setState(() => ({ recoverPasswordEmail: value }));
            }}
            onClickRecover={() => console.log("onClickRecover")}
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
            onButtonClick={() => console.log("info message")}
          />
        ) : null}
        {hasError ? (
          <FullPageMessage
            iconVariant={"error"}
            message={errorMessage}
            onButtonClick={() => console.log("error message")}
          />
        ) : null}
      </>
    );
  }
}

export default App;
