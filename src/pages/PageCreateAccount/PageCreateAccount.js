import React from "react";
import PropTypes from "prop-types";

import isEmail from "validator/lib/isEmail";
import isStrongPassword from "validator/lib/isStrongPassword";

import CreateAccount from "../../components/CreateAccount";

import {
  EMAIL_VALIDATION_ERROR,
  PASSWORD_VALIDATION_ERROR,
  RECOVER_PASSWORD_VALIDATION_ERROR,
} from "../../consts";

import classes from "./styles.module.css";

export class PageCreateAccount extends React.Component {
  state = {
    email: "",
    emailError: EMAIL_VALIDATION_ERROR,
    password: "",
    passwordError: PASSWORD_VALIDATION_ERROR,
    repeatPassword: "",
    repeatPasswordError: RECOVER_PASSWORD_VALIDATION_ERROR,
    submitted: false,
  };

  onClickCreateAccount = async () => {
    const { email, password, emailError, passwordError, repeatPasswordError } =
      this.state;

    this.setState(() => ({ submitted: true }));
    if (emailError || passwordError || repeatPasswordError) return;

    this.props.onClickCreateAccount(email, password);
  };

  render() {
    const { className, onClickBackToLogin, ...otherProps } = this.props;

    const {
      email,
      emailError,
      password,
      passwordError,
      repeatPassword,
      repeatPasswordError,
      submitted,
    } = this.state;

    return (
      <div
        className={`${classes.root}${className ? ` ${className}` : ""}`}
        {...otherProps}
      >
        <CreateAccount
          email={email}
          emailError={submitted ? emailError : undefined}
          password={password}
          passwordError={submitted ? passwordError : undefined}
          repeatPassword={repeatPassword}
          repeatPasswordError={submitted ? repeatPasswordError : undefined}
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
              repeatPasswordError:
                password === value ? "" : RECOVER_PASSWORD_VALIDATION_ERROR,
            }));
            if (!value) {
              this.setState(() => ({ submitted: false }));
            }
          }}
          onChangeRepeatPassword={(e) => {
            const { value } = e.target;
            this.setState(() => ({
              repeatPassword: value,
              repeatPasswordError:
                password === value ? "" : RECOVER_PASSWORD_VALIDATION_ERROR,
            }));
            if (!value) {
              this.setState(() => ({ submitted: false }));
            }
          }}
          onClickCreateAccount={this.onClickCreateAccount}
          onClickBackToLogin={onClickBackToLogin}
        />
      </div>
    );
  }
}

PageCreateAccount.propTypes = {
  className: PropTypes.string,
  onClickCreateAccount: PropTypes.func.isRequired,
  onClickBackToLogin: PropTypes.func.isRequired,
};

export default PageCreateAccount;
