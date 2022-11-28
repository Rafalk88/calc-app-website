import React from "react";
import PropTypes from "prop-types";

import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";

import { NotLogedRouterContext } from "../../contexts/RouterContext";
import FullPageLayout from "../../components/FullPageLayout";
import LoginForm from "../../components/LoginForm";

import {
  EMAIL_VALIDATION_ERROR,
  PASSWORD_VALIDATION_ERROR,
} from "../../consts";

import classes from "./styles.module.css";

export const PageLogin = (props) => {
  const {
    className,
    onClickLogin: onClickLoginFromProps,
    ...otherProps
  } = props;

  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(EMAIL_VALIDATION_ERROR);
  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(
    PASSWORD_VALIDATION_ERROR
  );
  const [submitted, setSubmitted] = React.useState(false);

  const { setRoute } = React.useContext(NotLogedRouterContext);

  const onClickCreateAccountPage = React.useCallback(() => {
    setRoute("CREATE-ACCOUNT");
  }, [setRoute]);
  const onClickRecoverPasswordPage = React.useCallback(() => {
    setRoute("RECOVER-PASSWORD");
  }, [setRoute]);

  const onClickLogin = React.useCallback(async () => {
    setSubmitted(() => true);
    if (emailError || passwordError) return;

    onClickLoginFromProps(email, password);
  }, [email, emailError, password, passwordError, onClickLoginFromProps]);

  React.useEffect(() => {
    setEmailError(isEmail(email) ? "" : EMAIL_VALIDATION_ERROR);
  }, [email]);

  React.useEffect(() => {
    setPasswordError(
      isStrongPassword(password) ? "" : PASSWORD_VALIDATION_ERROR
    );
  }, [password]);

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <FullPageLayout>
        <LoginForm
          email={email}
          emailError={submitted ? emailError : undefined}
          password={password}
          passwordError={submitted ? passwordError : undefined}
          onChangeEmail={(e) => {
            setEmail(() => e.target.value);
          }}
          onChangePassword={(e) => {
            setPassword(() => e.target.value);
          }}
          onClickLogin={onClickLogin}
          onClickCreateAccountPage={onClickCreateAccountPage}
          onClickRecoverPasswordPage={onClickRecoverPasswordPage}
        />
      </FullPageLayout>
    </div>
  );
};

PageLogin.propTypes = {
  className: PropTypes.string,
  onClickLogin: PropTypes.func.isRequired,
};

export default PageLogin;
