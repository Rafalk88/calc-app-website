import React from "react";
import PropTypes from "prop-types";

import IconVisiblePassword from "./IconVisiblePassword";
import IconHiddenPassword from "./IconHiddenPasword";

import classes from "./styles.module.css";

export const TextField = React.forwardRef((props, ref) => {
  const {
    name,
    className,
    errorMessage,
    type,
    passwordShown,
    repeatPasswordShown,
    tooglePassword,
    toogleRepeatPassword,
    ...otherProps
  } = props;

  return (
    <div className={`${classes.root}${className ? ` ${className}` : ""}`}>
      <div
        className={`${classes.inputDirectWrapper}${
          errorMessage ? ` ${classes.hasError}` : ""
        }`}
      >
        <input
          className={classes.input}
          ref={ref}
          name={name}
          type={type}
          {...otherProps}
        />
        {["password"].indexOf(name) >= 0 ? (
          passwordShown ? (
            <IconHiddenPassword
              className={classes.passwordIcon}
              onClick={tooglePassword}
            />
          ) : (
            <IconVisiblePassword
              className={classes.passwordIcon}
              onClick={tooglePassword}
            />
          )
        ) : ["repeatPassword"].indexOf(name) >= 0 ? (
          repeatPasswordShown ? (
            <IconHiddenPassword
              className={classes.passwordIcon}
              onClick={toogleRepeatPassword}
            />
          ) : (
            <IconVisiblePassword
              className={classes.passwordIcon}
              onClick={toogleRepeatPassword}
            />
          )
        ) : null}
      </div>
      {errorMessage ? (
        <div className={classes.errorMessage}>{errorMessage}</div>
      ) : null}
    </div>
  );
});

TextField.displayName = "TextField";

TextField.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  errorMessage: PropTypes.node,
  type: PropTypes.string,
  passwordShown: PropTypes.bool,
  repeatPasswordShown: PropTypes.bool,
  tooglePassword: PropTypes.func,
  toogleRepeatPassword: PropTypes.func,
};

export default TextField;
