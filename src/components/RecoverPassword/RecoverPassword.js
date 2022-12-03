import React from "react";
import PropTypes from "prop-types";

import isEmail from "validator/lib/isEmail";
import { useFormContext } from "react-hook-form";

import Logo from "../LoginForm/Logo";
import Typography from "../Typography";
import TextField from "../TextField";
import Button from "../Button";
import { EMAIL_VALIDATION_ERROR } from "../../consts";

import classes from "./styles.module.css";

export const RecoverPassword = (props) => {
  const { className, onSubmit, onClickBackToLogin, ...otherProps } = props;

  const methods = useFormContext();
  const {
    register,
    formState: { errors },
  } = methods;
  const registeredEmailProps = register("email", {
    validate: (email) => isEmail(email) || EMAIL_VALIDATION_ERROR,
  });

  return (
    <form
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      onSubmit={onSubmit}
      {...otherProps}
    >
      <Logo className={classes.logo} />
      <Typography className={classes.header} variant={"h4-extraLight"}>
        Recover Password
      </Typography>
      <TextField
        className={classes.textField}
        placeholder={"E-mail"}
        errorMessage={errors.email && errors.email.message}
        {...registeredEmailProps}
      />
      <Button
        className={classes.button}
        variant={"contained"}
        color={"primary"}
        type={"submit"}
      >
        <Typography variant={"h5-bold"}>Recover Password</Typography>
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

RecoverPassword.propTypes = {
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onClickBackToLogin: PropTypes.func.isRequired,
};

export default RecoverPassword;
