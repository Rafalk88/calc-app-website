import React from "react";
import PropTypes from "prop-types";

import { useForm, FormProvider } from "react-hook-form";

import { useNotLogedRouteTo } from "../../contexts/RouterContext";
import RecoverPassword from "../../components/RecoverPassword";

import classes from "./styles.module.css";

export const PageRecoverPassword = (props) => {
  const { className, onClickRecover, ...otherProps } = props;

  const methods = useForm();
  const { handleSubmit } = methods;

  const routeTo = useNotLogedRouteTo();
  const onClickBackToLogin = React.useCallback(() => {
    routeTo("LOGIN");
  }, [routeTo]);

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <FormProvider {...methods}>
        <RecoverPassword
          onSubmit={handleSubmit((data) => onClickRecover(data.email))}
          onClickBackToLogin={onClickBackToLogin}
        />
      </FormProvider>
    </div>
  );
};

PageRecoverPassword.propTypes = {
  className: PropTypes.string,
  onClickRecover: PropTypes.func.isRequired,
};

export default PageRecoverPassword;
