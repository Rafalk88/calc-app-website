import React from "react";
import PropTypes from "prop-types";

import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";
import { useFormContext } from "react-hook-form";

import Logo from "../LoginForm/Logo";
import Typography from "../Typography";
import TextField from "../TextField";
import Button from "../Button";
import IconCheck from "./IconCheck";

import {
  EMAIL_VALIDATION_ERROR,
  PASSWORD_VALIDATION_ERROR,
  RECOVER_PASSWORD_VALIDATION_ERROR,
} from "../../consts";

import classes from "./styles.module.css";

export const CreateAccount = (props) => {
  const {
    className,
    passwordShown,
    repeatPasswordShown,
    tooglePassword,
    toogleRepeatPassword,
    onSubmit,
    onClickBackToLogin,
    ...otherProps
  } = props;

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
      <Typography className={classes.header} variant={"h4-extraLight"}>
        Create account !
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
        type={passwordShown ? "text" : "password"}
        passwordShown={passwordShown}
        tooglePassword={tooglePassword}
        errorMessage={errors.password && errors.password.message}
        {...registeredPasswordProps}
      />
      <Typography className={classes.passwordInfo} variant={"h6-light"}>
        {PASSWORD_VALIDATION_ERROR.map((el, i) => (
          <div
            key={i}
            className={`${classes.passwordMessageWrapper}${
              el.toValid
                ? ` ${classes.validationMessage}`
                : ` ${classes.validationHeader}`
            }`}
          >
            {el.toValid ? (
              <div className={classes.passwordIconWrapper}></div>
            ) : null}
            <p className={classes.passMessageParagraph}>{el.message}</p>
          </div>
        ))}
      </Typography>
      <TextField
        className={classes.textField}
        placeholder={"Repeat password"}
        type={repeatPasswordShown ? "text" : "password"}
        repeatPasswordShown={repeatPasswordShown}
        toogleRepeatPassword={toogleRepeatPassword}
        errorMessage={errors.repeatPassword && errors.repeatPassword.message}
        {...registeredRepeatPasswordProps}
      />
      <Button
        className={classes.button}
        variant={"contained"}
        color={"primary"}
        type={"submit"}
      >
        <Typography variant={"h5-bold"}>Create Account</Typography>
      </Button>
      <Button
        className={classes.button}
        variant={"contained"}
        color={"secondary"}
        onClick={onClickBackToLogin}
      >
        <Typography variant={"h5-bold"}>Go Back</Typography>
      </Button>
    </form>
  );
};

CreateAccount.propTypes = {
  className: PropTypes.string,
  passwordShown: PropTypes.bool,
  repeatPasswordShown: PropTypes.bool,
  tooglePassword: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClickBackToLogin: PropTypes.func.isRequired,
};

export default CreateAccount;
