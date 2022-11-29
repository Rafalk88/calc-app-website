import React from "react";
import PropTypes from "prop-types";

import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";
import { useFormContext } from "react-hook-form";

import Logo from "./Logo";
import TextField from "../TextField";
import Typography from "../Typography";
import Button from "../Button";
import {
  EMAIL_VALIDATION_ERROR,
  PASSWORD_VALIDATION_ERROR,
} from "../../consts";

import classes from "./styles.module.css";

export const LoginForm = (props) => {
  const {
    className,
    onSubmit,
    onClickCreateAccountPage,
    onClickRecoverPasswordPage,
    ...otherProps
  } = props;

  const methods = useFormContext();
  const {
    register,
    formState: { errors },
  } = methods;

  const registeredEmailProps = register("email", {
    validate: (email) => isEmail(email) || EMAIL_VALIDATION_ERROR,
  });

  const registeredPasswordProps = register("password", {
    validate: (password) =>
      isStrongPassword(password) || PASSWORD_VALIDATION_ERROR,
  });

  return (
    <form
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      onSubmit={onSubmit}
      {...otherProps}
    >
      <Logo className={classes.logo} />
      <Typography className={classes.header} variant={"h4-extraLight"}>
        Log In !
      </Typography>
      <TextField
        className={classes.textField}
        placeholder={"E-mail"}
        errorMessage={errors.email && errors.email.message}
        {...registeredEmailProps}
      />
      <TextField
        className={classes.textField}
        placeholder={"Password"}
        errorMessage={errors.password && errors.password.message}
        type={"password"}
        {...registeredPasswordProps}
      />
      <Button
        className={classes.button}
        variant={"contained"}
        color={"primary"}
        type={"submit"}
      >
        LOGIN
      </Button>
      <Button
        className={classes.button}
        variant={"contained"}
        color={"secondary"}
        onClick={onClickCreateAccountPage}
      >
        CREATE ACCOUNT
      </Button>
      <Button
        className={classes.button}
        variant={"text"}
        onClick={onClickRecoverPasswordPage}
      >
        RECOVER PASSWORD
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onClickCreateAccountPage: PropTypes.func.isRequired,
  onClickRecoverPasswordPage: PropTypes.func.isRequired,
};

export default LoginForm;
