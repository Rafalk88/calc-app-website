import React from "react";
import PropTypes from "prop-types";

import { useForm, FormProvider } from "react-hook-form";

import { useNotLogedRouteTo } from "../../contexts/RouterContext";
import FullPageLayout from "../../components/FullPageLayout";
import LoginForm from "../../components/LoginForm";

import classes from "./styles.module.css";

export const PageLogin = (props) => {
  const { className, onClickLogin, ...otherProps } = props;

  const methods = useForm();
  const { handleSubmit } = methods;

  const notLogedRouteTo = useNotLogedRouteTo();

  const onClickCreateAccountPage = React.useCallback(() => {
    notLogedRouteTo("CREATE-ACCOUNT");
  }, [notLogedRouteTo]);
  const onClickRecoverPasswordPage = React.useCallback(() => {
    notLogedRouteTo("RECOVER-PASSWORD");
  }, [notLogedRouteTo]);

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <FullPageLayout>
        <FormProvider {...methods}>
          <LoginForm
            onSubmit={handleSubmit((data) =>
              onClickLogin(data.email, data.password)
            )}
            onClickCreateAccountPage={onClickCreateAccountPage}
            onClickRecoverPasswordPage={onClickRecoverPasswordPage}
          />
        </FormProvider>
      </FullPageLayout>
    </div>
  );
};

PageLogin.propTypes = {
  className: PropTypes.string,
  onClickLogin: PropTypes.func.isRequired,
};

export default PageLogin;
