import React from "react";
import PropTypes from "prop-types";

import isEmail from "validator/lib/isEmail";

import { useNotLogedRouteTo } from "../../contexts/RouterContext";
import RecoverPassword from "../../components/RecoverPassword";
import { EMAIL_VALIDATION_ERROR } from "../../consts";

import classes from "./styles.module.css";

export const PageRecoverPassword = (props) => {
  const {
    className,
    onClickRecover: onClickRecoverFromProps,
    ...otherProps
  } = props;

  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(EMAIL_VALIDATION_ERROR);
  const [submitted, setSubmitted] = React.useState(false);

  const routeTo = useNotLogedRouteTo();
  const onClickBackToLogin = React.useCallback(() => {
    routeTo("LOGIN");
  }, [routeTo]);

  const onClickRecover = React.useCallback(async () => {
    setSubmitted(() => true);
    if (emailError) return;

    onClickRecoverFromProps(email);
    setEmail(() => "");
    setSubmitted(() => false);
  }, [email, emailError, onClickRecoverFromProps]);

  React.useEffect(() => {
    setEmailError(() => (isEmail(email) ? "" : EMAIL_VALIDATION_ERROR));
  }, [email]);

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <RecoverPassword
        email={email}
        emailError={submitted ? emailError : undefined}
        onChangeEmail={(e) => setEmail(() => e.target.value)}
        onClickRecover={onClickRecover}
        onClickBackToLogin={onClickBackToLogin}
      />
    </div>
  );
};

PageRecoverPassword.propTypes = {
  className: PropTypes.string,
  onClickRecover: PropTypes.func.isRequired,
};

export default PageRecoverPassword;
