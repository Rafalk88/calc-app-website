import React from "react";
import PropTypes from "prop-types";

import Logo from "./Logo";
import TextField from "../TextField";
import Typography from "../Typography";
import Button from "../Button";

import classes from "./styles.module.css";

export const LoginForm = (props) => {
  const {
    className,
    email,
    emailError,
    password,
    passwordError,
    onChangeEmail,
    onChangePassword,
    onClickLogin,
    onClickCreateAccount,
    onClickRecoverPassword,
    ...otherProps
  } = props;
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <Logo className={classes.logo} />
      <Typography className={classes.header} variant={"h4-extraLight"}>
        Log In !
      </Typography>
      <TextField
        className={classes.textField}
        errorMessage={emailError}
        placeholder={"E-mail"}
        value={email}
        onChange={onChangeEmail}
      />
      <TextField
        className={classes.textField}
        placeholder={"Password"}
        errorMessage={passwordError}
        type={"password"}
        value={password}
        onChange={onChangePassword}
      />
      <Button
        className={classes.button}
        variant={"contained"}
        color={"primary"}
        onClick={onClickLogin}
      >
        LOGIN
      </Button>
      <Button
        className={classes.button}
        variant={"contained"}
        color={"secondary"}
        onClick={onClickCreateAccount}
      >
        CREATE ACCOUNT
      </Button>
      <Button
        className={classes.button}
        variant={"text"}
        onClick={onClickRecoverPassword}
      >
        RECOVER PASSWORD
      </Button>
    </div>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string,
  emailError: PropTypes.string,
  password: PropTypes.string,
  passwordError: PropTypes.node,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func.isRequired,
  onClickLogin: PropTypes.func.isRequired,
  onClickCreateAccount: PropTypes.func.isRequired,
  onClickRecoverPassword: PropTypes.func.isRequired,
};

export default LoginForm;
