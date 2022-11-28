import React from "react";
import PropTypes from "prop-types";

import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";

import { useNotLogedRouteTo } from "../../contexts/RouterContext";
import CreateAccount from "../../components/CreateAccount";

import {
  EMAIL_VALIDATION_ERROR,
  PASSWORD_VALIDATION_ERROR,
  RECOVER_PASSWORD_VALIDATION_ERROR,
} from "../../consts";

import classes from "./styles.module.css";

export const PageCreateAccount = (props) => {
  const {
    className,
    onClickCreateAccount: onClickCreateAccountFromProps,
    ...otherProps
  } = props;

  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(EMAIL_VALIDATION_ERROR);
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(
    PASSWORD_VALIDATION_ERROR
  );
  const [repeatPassword, setRepeatPassword] = React.useState("");
  const [repeatPasswordError, setRepeatPasswordError] = React.useState(
    RECOVER_PASSWORD_VALIDATION_ERROR
  );
  const [submitted, setSubmitted] = React.useState(false);

  const routeTo = useNotLogedRouteTo();
  const onClickBackToLogin = React.useCallback(() => {
    routeTo("LOGIN");
  }, [routeTo]);

  const onClickCreateAccount = React.useCallback(async () => {
    setSubmitted(() => true);
    if (emailError || passwordError || repeatPasswordError) return;

    onClickCreateAccountFromProps(email, password);
  }, [
    email,
    emailError,
    password,
    passwordError,
    repeatPasswordError,
    onClickCreateAccountFromProps,
  ]);

  React.useEffect(() => {
    setEmailError(() => (isEmail(email) ? "" : EMAIL_VALIDATION_ERROR));
  }, [email]);

  React.useEffect(() => {
    setPasswordError(() =>
      isStrongPassword(password) ? "" : PASSWORD_VALIDATION_ERROR
    );
    setRepeatPasswordError(() =>
      password === repeatPassword ? "" : RECOVER_PASSWORD_VALIDATION_ERROR
    );
  }, [password, repeatPassword]);

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <CreateAccount
        email={email}
        emailError={submitted ? emailError : undefined}
        password={password}
        passwordError={submitted ? passwordError : undefined}
        repeatPassword={repeatPassword}
        repeatPasswordError={submitted ? repeatPasswordError : undefined}
        onChangeEmail={(e) => {
          setEmail(() => e.target.value);
        }}
        onChangePassword={(e) => {
          setPassword(() => e.target.value);
        }}
        onChangeRepeatPassword={(e) => {
          setRepeatPassword(() => e.target.value);
        }}
        onClickCreateAccount={onClickCreateAccount}
        onClickBackToLogin={onClickBackToLogin}
      />
    </div>
  );
};

PageCreateAccount.propTypes = {
  className: PropTypes.string,
  onClickCreateAccount: PropTypes.func.isRequired,
};

export default PageCreateAccount;
