import React from "react";
import PropTypes from "prop-types";

import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";
import { useFormContext } from "react-hook-form";

import Logo from "./Logo";
import TextField from "../TextField";
import Typography from "../Typography";
import Link from "../Link";
import Button from "../Button";
import IconLine from "./IconLine";
import IconGoogle from "./IconGoogle";
import IconFacebook from "./IconFacebook";
import { EMAIL_VALIDATION_ERROR, WRONG_PASSWORD_ERROR } from "../../consts";

import classes from "./styles.module.css";

export const LoginForm = (props) => {
  const {
    className,
    passwordShown,
    onSubmit,
    onClickCreateAccountPage,
    onClickRecoverPasswordPage,
    tooglePassword,
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
    validate: (password) => isStrongPassword(password) || WRONG_PASSWORD_ERROR,
  });

  return (
    <form
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      onSubmit={onSubmit}
      {...otherProps}
    >
      <Logo className={classes.logo} />
      <Typography variant={"h4-extraLight"}>Log In !</Typography>
      <TextField
        className={`${classes.textField}`}
        placeholder={"E-mail"}
        errorMessage={errors.email && errors.email.message}
        {...registeredEmailProps}
      />
      <TextField
        className={classes.textField}
        placeholder={"Password"}
        errorMessage={errors.password && errors.password.message}
        type={passwordShown ? "text" : "password"}
        passwordShown={passwordShown}
        tooglePassword={tooglePassword}
        {...registeredPasswordProps}
      />
      <Link className={classes.link} onClick={onClickRecoverPasswordPage}>
        <Typography variant={"h5-bold"}>Recover Password</Typography>
      </Link>
      <Button
        className={classes.button}
        variant={"contained"}
        color={"primary"}
        type={"submit"}
      >
        <Typography variant={"h5-bold"}>Login</Typography>
      </Button>
      <Button
        className={classes.button}
        variant={"contained"}
        color={"secondary"}
        onClick={onClickCreateAccountPage}
      >
        <Typography variant={"h5-bold"}>Create Account</Typography>
      </Button>
      <div className={classes.additionalLogin}>
        <IconLine />
        <Typography className={classes.span} variant={"h4-extraLight"}>
          or
        </Typography>
        <IconLine />
      </div>
      <Button
        className={classes.button}
        variant={"text"}
        onClick={() => console.log("Log by Google")}
      >
        <IconGoogle className={classes.icon} />
        <Typography variant={"h5-bold"}>Log by Google</Typography>
      </Button>
      <Button
        className={classes.button}
        variant={"text"}
        onClick={() => console.log("Log by Facebook")}
      >
        <IconFacebook className={classes.icon} />
        <Typography variant={"h5-bold"}>Log by Facebook</Typography>
      </Button>
    </form>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string,
  passwordShown: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  onClickCreateAccountPage: PropTypes.func.isRequired,
  onClickRecoverPasswordPage: PropTypes.func.isRequired,
  tooglePassword: PropTypes.func.isRequired,
};

export default LoginForm;
