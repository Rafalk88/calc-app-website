import React from "react";
import PropTypes from "prop-types";

import Logo from "../LoginForm/Logo";
import Typhography from "../Typography";
import TextField from "../TextField";
import Button from "../Button";

import classes from "./styles.module.css";

export const CreateAccount = (props) => {
  const {
    className,
    email,
    emailError,
    password,
    passwordError,
    repeatPassword,
    repeatPasswordError,
    onChangeEmail,
    onChangePassword,
    onChangeRepeatPassword,
    onClickCreateAccount,
    onClickBackToLogin,
    ...otherProps
  } = props;
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <Logo className={classes.logo} />
      <Typhography className={classes.header} variant={"h4-extraLight"}>
        Create account !
      </Typhography>
      <TextField
        className={classes.textField}
        placeholder={"E-mail"}
        value={email}
        errorMessage={emailError}
        onChange={onChangeEmail}
      />
      <TextField
        className={classes.textField}
        placeholder={"Password"}
        type={"password"}
        errorMessage={passwordError}
        value={password}
        onChange={onChangePassword}
      />
      <TextField
        className={classes.textField}
        placeholder={"Repeat password"}
        type={"password"}
        errorMessage={repeatPasswordError}
        value={repeatPassword}
        onChange={onChangeRepeatPassword}
      />
      <Button
        className={classes.button}
        variant={"contained"}
        color={"primary"}
        onClick={onClickCreateAccount}
      >
        CREATE
      </Button>
      <Button
        className={classes.button}
        variant={"text"}
        onClick={onClickBackToLogin}
      >
        GO BACK
      </Button>
    </div>
  );
};

CreateAccount.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string,
  emailError: PropTypes.string,
  password: PropTypes.string,
  passwordError: PropTypes.node,
  repeatPassword: PropTypes.string,
  repeatPasswordError: PropTypes.string,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangeRepeatPassword: PropTypes.func.isRequired,
  onClickCreateAccount: PropTypes.func.isRequired,
  onClickBackToLogin: PropTypes.func.isRequired,
};

export default CreateAccount;
