import React from "react";

import FullPageLoader from "./FullPageLoader";
import Typography from "./Typography/Typography";

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
    const { isLoading } = this.state;
    return (
      <>
        <h1>Hello world</h1>
        {isLoading ? <FullPageLoader /> : null}
        <Typography variant={"title1"}>title1</Typography>
        <br />
        <Typography variant={"title2"}>title2</Typography>
        <br />
        <Typography variant={"h1-bold"}>ENTER</Typography>
      </>
    );
  }
}

export default App;
