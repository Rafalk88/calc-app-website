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
    email: "",
    emailError: EMAIL_VALIDATION_ERROR,
    password: "",
    passwordError: PASSWORD_VALIDATION_ERROR,
    submitted: false,
  };

  onClickLogin = async () => {
    const { email, password, emailError, passwordError } = this.state;

    this.setState(() => ({ submitted: true }));
    if (emailError || passwordError) return;

    this.props.onClickLogin(email, password);
  };

  render() {
    const {
      className,
      onClickLogin,
      onClickCreateAccountPage,
      onClickRecoverPasswordPage,
      ...otherProps
    } = this.props;

    const { email, submitted, emailError, password, passwordError } =
      this.state;

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
              const { value } = e.target;
              this.setState(() => ({
                email: value,
                emailError:
                  isEmail(value) || !value ? "" : EMAIL_VALIDATION_ERROR,
              }));
              if (!value) {
                this.setState(() => ({ submitted: false }));
              }
            }}
            onChangePassword={(e) => {
              const { value } = e.target;
              this.setState(() => ({
                password: value,
                passwordError:
                  isStrongPassword(value) || !value
                    ? ""
                    : PASSWORD_VALIDATION_ERROR,
              }));
              if (!value) {
                this.setState(() => ({ submitted: false }));
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
