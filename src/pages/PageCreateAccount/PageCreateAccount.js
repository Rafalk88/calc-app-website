import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; 

import { useForm, FormProvider } from "react-hook-form";

import FullPageLayout from "../../components/FullPageLayout";
import CreateAccount from "../../components/CreateAccount";

import classes from "./styles.module.css";

export const PageCreateAccount = (props) => {
  const {
    className,
    passwordShown,
    repeatPasswordShown,
    tooglePassword,
    toogleRepeatPassword,
    onClickCreateAccount,
    ...otherProps
  } = props;

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
      <FullPageLayout>
        <FormProvider {...methods}>
          <CreateAccount
            passwordShown={passwordShown}
            repeatPasswordShown={repeatPasswordShown}
            tooglePassword={tooglePassword}
            toogleRepeatPassword={toogleRepeatPassword}
            onSubmit={handleSubmit((data) =>
              onClickCreateAccount(data.email, data.password)
            )}
            onClickBackToLogin={onClickBackToLogin}
          />
        </FormProvider>
      </FullPageLayout>
    </div>
  );
};

PageCreateAccount.propTypes = {
  className: PropTypes.string,
  passwordShown: PropTypes.bool,
  repeatPasswordShown: PropTypes.bool,
  tooglePassword: PropTypes.func,
  toogleRepeatPassword: PropTypes.func,
  onClickCreateAccount: PropTypes.func.isRequired,
};

export default PageCreateAccount;
