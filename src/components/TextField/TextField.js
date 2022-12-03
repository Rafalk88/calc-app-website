import React from "react";
import PropTypes from "prop-types";

import IconVisiblePassword from "./IconVisiblePassword";
import IconHiddenPassword from "./IconHiddenPasword";

import classes from "./styles.module.css";

export const TextField = React.forwardRef((props, ref) => {
  const {
    className,
    errorMessage,
    type,
    passwordShown,
    tooglePassword,
    passwordInput,
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
          type={type}
          {...otherProps}
        />
        {passwordInput ? (
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
  className: PropTypes.string,
  errorMessage: PropTypes.node,
  type: PropTypes.string,
  isVisible: PropTypes.bool,
  tooglePassword: PropTypes.func,
  passwordInput: PropTypes.bool,
};

export default TextField;
