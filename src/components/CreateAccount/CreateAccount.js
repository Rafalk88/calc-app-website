import React from "react";
import PropTypes from "prop-types";

import Logo from "../LoginForm/Logo";
import Typhography from "../Typography";
import TextField from "../TextField";
import Button from "../Button";

import classes from "./styles.module.css";

export const CreateAccount = (props) => {
  const { className, ...otherProps } = props;
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <Logo className={classes.logo} />
      <Typhography className={classes.header} variant={"h4-extraLight"}>
        Create account !
      </Typhography>
      <TextField className={classes.textField} placeholder={"E-mail"} />
      <TextField className={classes.textField} placeholder={"Password"} />
      <TextField
        className={classes.textField}
        placeholder={"Repeat password"}
      />
      <Button
        className={classes.button}
        variant={"contained"}
        color={"primary"}
      >
        CREATE
      </Button>
      <Button className={classes.button} variant={"text"}>
        GO BACK
      </Button>
    </div>
  );
};

CreateAccount.propTypes = {
  className: PropTypes.string,
};

export default CreateAccount;
