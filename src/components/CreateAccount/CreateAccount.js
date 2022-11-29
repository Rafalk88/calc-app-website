import React from "react";
import PropTypes from "prop-types";

import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";
import { useFormContext } from "react-hook-form";

import Logo from "../LoginForm/Logo";
import Typhography from "../Typography";
import TextField from "../TextField";
import Button from "../Button";

import {
  EMAIL_VALIDATION_ERROR,
  PASSWORD_VALIDATION_ERROR,
  RECOVER_PASSWORD_VALIDATION_ERROR,
} from "../../consts";

import classes from "./styles.module.css";

export const CreateAccount = (props) => {
  const { className, onSubmit, onClickBackToLogin, ...otherProps } = props;

  const methods = useFormContext();
  const {
    register,
    formState: { errors },
    watch,
  } = methods;

  const password = watch("password");

  const registeredEmailProps = register("email", {
    validate: (email) => isEmail(email) || EMAIL_VALIDATION_ERROR,
  });

  const registeredPasswordProps = register("password", {
    validate: (password) =>
      isStrongPassword(password) || PASSWORD_VALIDATION_ERROR,
  });

  const registeredRepeatPasswordProps = register("repeatPassword", {
    validate: (repeatPassword) =>
      repeatPassword === password || RECOVER_PASSWORD_VALIDATION_ERROR,
  });

  return (
    <form
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      onSubmit={onSubmit}
      {...otherProps}
    >
      <Logo className={classes.logo} />
      <Typhography className={classes.header} variant={"h4-extraLight"}>
        Create account !
      </Typhography>
      <TextField
        className={classes.textField}
        placeholder={"E-mail"}
        errorMessage={errors.email && errors.email.message}
        {...registeredEmailProps}
      />
      <TextField
        className={classes.textField}
        placeholder={"Password"}
        type={"password"}
        errorMessage={errors.password && errors.password.message}
        {...registeredPasswordProps}
      />
      <TextField
        className={classes.textField}
        placeholder={"Repeat password"}
        type={"password"}
        errorMessage={errors.repeatPassword && errors.repeatPassword.message}
        {...registeredRepeatPasswordProps}
      />
      <Button
        className={classes.button}
        variant={"contained"}
        color={"primary"}
        type={"submit"}
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
    </form>
  );
};

CreateAccount.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onClickBackToLogin: PropTypes.func.isRequired,
};

export default CreateAccount;
