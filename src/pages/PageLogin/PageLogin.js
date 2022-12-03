import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { useForm, FormProvider } from "react-hook-form";

import FullPageLayout from "../../components/FullPageLayout";
import LoginForm from "../../components/LoginForm";

import classes from "./styles.module.css";

export const PageLogin = (props) => {
  const { className, onClickLogin, ...otherProps } = props;

  const [passwordShown, setPasswordShown] = React.useState(false);

  const methods = useForm();
  const { handleSubmit } = methods;

  const navigate = useNavigate();

  const onClickCreateAccountPage = React.useCallback(() => {
    navigate("/create-account");
  }, [navigate]);
  const onClickRecoverPasswordPage = React.useCallback(() => {
    navigate("/recover-password");
  }, [navigate]);

  const tooglePassword = React.useCallback(() => {
    setPasswordShown(!passwordShown);
  }, [passwordShown]);

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <FullPageLayout>
        <FormProvider {...methods}>
          <LoginForm
            passwordShown={passwordShown}
            tooglePassword={tooglePassword}
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
