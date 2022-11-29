import React from "react";
import PropTypes from "prop-types";

import { useForm, FormProvider } from "react-hook-form";

import { useNotLogedRouteTo } from "../../contexts/RouterContext";
import CreateAccount from "../../components/CreateAccount";

import classes from "./styles.module.css";

export const PageCreateAccount = (props) => {
  const { className, onClickCreateAccount, ...otherProps } = props;

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
