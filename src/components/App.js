import React from "react";

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
    return <div>Hello world</div>;
  }
}

export default App;
