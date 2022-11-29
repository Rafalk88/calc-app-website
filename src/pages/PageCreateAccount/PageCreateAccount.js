import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; 

import { useForm, FormProvider } from "react-hook-form";

import CreateAccount from "../../components/CreateAccount";

import classes from "./styles.module.css";

export const PageCreateAccount = (props) => {
  const { className, onClickCreateAccount, ...otherProps } = props;

  const methods = useForm();
  const { handleSubmit } = methods;

  const navigate = useNavigate();
  const onClickBackToLogin = React.useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <FormProvider {...methods}>
        <CreateAccount
          onSubmit={handleSubmit((data) =>
            onClickCreateAccount(data.email, data.password)
          )}
          onClickBackToLogin={onClickBackToLogin}
        />
      </FormProvider>
    </div>
  );
};

PageCreateAccount.propTypes = {
  className: PropTypes.string,
  onClickCreateAccount: PropTypes.func.isRequired,
};

export default PageCreateAccount;
