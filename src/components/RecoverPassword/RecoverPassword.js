import React from "react";
import PropTypes from "prop-types";

import Logo from "../LoginForm/Logo";
import Typography from "../Typography";
import TextField from "../TextField";
import Button from "../Button";

import classes from "./styles.module.css";

export const RecoverPassword = (props) => {
  const {
    className,
    email,
    emailError,
    onChangeEmail,
    onClickRecover,
    onClickBackToLogin,
    ...otherProps
  } = props;
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <Logo className={classes.logo} />
      <Typography className={classes.header} variant={"h4-extraLight"}>
        Recover Password
      </Typography>
      <TextField
        className={classes.textField}
        placeholder={"E-mail"}
        value={email}
        errorMessage={emailError}
        onChange={onChangeEmail}
      />
      <Button
        className={classes.button}
        variant={"contained"}
        color={"primary"}
        onClick={onClickRecover}
      >
        RECOVER
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

RecoverPassword.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string,
  emailError: PropTypes.string,
  onChangeEmail: PropTypes.func.isRequired,
  onClickRecover: PropTypes.func.isRequired,
  onClickBackToLogin: PropTypes.func.isRequired,
};

export default RecoverPassword;
