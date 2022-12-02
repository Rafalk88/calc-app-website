import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import ErrorIcon from "./ErrorIcon";

import Typography from "../Typography";
import Button from "../Button";

import classes from "./styles.module.css";

export const Error404 = (props) => {
  const { className, buttonLabel, ...otherProps } = props;

  const navigate = useNavigate();

  const onClickDismiss404Error = React.useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <ErrorIcon />
      <Typography className={classes.textField} variant={"h4-extraLight"}>
        Oops, we can't find the page you'r look for!
      </Typography>
      <Button
        className={classes.button}
        variant={"contained"}
        color={"primary"}
        onClick={onClickDismiss404Error}
      >
        <Typography variant={"h3-bold"}>{buttonLabel}</Typography>
      </Button>
    </div>
  );
};

Error404.propTypes = {
  className: PropTypes.string,
  buttonLabel: PropTypes.string,
};

export default Error404;
