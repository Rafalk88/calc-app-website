import React from "react";
import PropTypes from "prop-types";

import isEmail from "validator/lib/isEmail";

import RecoverPassword from "../../components/RecoverPassword";
import { EMAIL_VALIDATION_ERROR } from "../../consts";

import classes from "./styles.module.css";

export class PageRecoverPassword extends React.Component {
  state = {
    email: "",
    emailError: EMAIL_VALIDATION_ERROR,
    submitted: false,
  };

  onClickRecover = async () => {
    const { email, emailError } = this.state;
    this.setState(() => ({ submitted: true }));
    if (emailError) return;

    this.props.onClickRecover(email);
  };

  render() {
    const { className, onClickRecover, onClickBackToLogin, ...otherProps } =
      this.props;
    const { email, emailError, submitted } = this.state;

    return (
      <div
        className={`${classes.root}${className ? ` ${className}` : ""}`}
        {...otherProps}
      >
        <RecoverPassword
          email={email}
          emailError={submitted ? emailError : undefined}
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
          onClickRecover={this.onClickRecover}
          onClickBackToLogin={onClickBackToLogin}
        />
      </div>
    );
  }
}

PageRecoverPassword.propTypes = {
  className: PropTypes.string,
  onClickRecover: PropTypes.func.isRequired,
  onClickBackToLogin: PropTypes.func.isRequired,
};

export default PageRecoverPassword;
