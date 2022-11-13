import React from "react";

import FullPageLoader from "./FullPageLoader/FullPageLoader";
import FullPageMessage from "./FullPageMessage/FullPageMessage";

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
    const { isLoading, hasError, errorMessage, hasInfo, infoMessage } =
      this.state;
    return (
      <>
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
