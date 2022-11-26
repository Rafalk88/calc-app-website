import React from "react";
import PropTypes from "prop-types";

import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";

import FullPageLayout from "../../components/FullPageLayout";
import LoginForm from "../../components/LoginForm";
import {
  EMAIL_VALIDATION_ERROR,
  PASSWORD_VALIDATION_ERROR,
} from "../../consts";

import classes from "./styles.module.css";

export class PageLogin extends React.Component {
  state = {
    loginEmail: "",
    loginEmailError: EMAIL_VALIDATION_ERROR,
    loginPassword: "",
    loginPasswordError: PASSWORD_VALIDATION_ERROR,
    loginSubmitted: false,
  };

  onClickLogin = async () => {
    const { loginEmail, loginPassword, loginEmailError, loginPasswordError } =
      this.state;

    this.setState(() => ({ loginSubmitted: true }));
    if (loginEmailError || loginPasswordError) return;

    this.props.onClickLogin(loginEmail, loginPassword);
  };

  render() {
    const {
      className,
      onClickCreateAccountPage,
      onClickRecoverPasswordPage,
      ...otherProps
    } = this.props;

    const {
      loginEmail,
      loginSubmitted,
      loginEmailError,
      loginPassword,
      loginPasswordError,
    } = this.state;

    return (
      <div
        className={`${classes.root}${className ? ` ${className}` : ""}`}
        {...otherProps}
      >
        <FullPageLayout>
          <LoginForm
            email={loginEmail}
            emailError={loginSubmitted ? loginEmailError : undefined}
            password={loginPassword}
            passwordError={loginSubmitted ? loginPasswordError : undefined}
            onChangeEmail={(e) => {
              const { value } = e.target;
              this.setState(() => ({
                loginEmail: value,
                loginEmailError:
                  isEmail(value) || !value ? "" : EMAIL_VALIDATION_ERROR,
              }));
              if (!value) {
                this.setState(() => ({ loginSubmitted: false }));
              }
            }}
            onChangePassword={(e) => {
              const { value } = e.target;
              this.setState(() => ({
                loginPassword: value,
                loginPasswordError:
                  isStrongPassword(value) || !value
                    ? ""
                    : PASSWORD_VALIDATION_ERROR,
              }));
              if (!value) {
                this.setState(() => ({ loginSubmitted: false }));
              }
            }}
            onClickLogin={this.onClickLogin}
            onClickCreateAccountPage={onClickCreateAccountPage}
            onClickRecoverPasswordPage={onClickRecoverPasswordPage}
          />
        </FullPageLayout>
      </div>
    );
  }
}

PageLogin.propTypes = {
  className: PropTypes.string,
  onClickLogin: PropTypes.func.isRequired,
  onClickCreateAccountPage: PropTypes.func.isRequired,
  onClickRecoverPasswordPage: PropTypes.func.isRequired,
};

export default PageLogin;
