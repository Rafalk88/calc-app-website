import React from "react";
import PropTypes from "prop-types";

import IconInfo from "./IconInfo";
import IconError from "./IconError";
import Button from "./../Button";
import Typography from "./../Typography";

import classes from "./styles.module.css";

export const FullPageMessage = (props) => {
  const {
    className,
    message,
    buttonLabel = "GO BACK",
    iconVariant = "info",
    onButtonClick,
    ...otherProps
  } = props;

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <div className={classes.wrapper}>
        {iconVariant === "info" ? (
          <IconInfo />
        ) : iconVariant === "error" ? (
          <IconError />
        ) : null}
        <Typography className={classes.textField} variant={"h4-extraLight"}>
          {message}
        </Typography>
        <Button
          className={classes.button}
          variant={"contained"}
          color={"primary"}
          onClick={onButtonClick}
        >
          <Typography variant={"h3-bold"}>{buttonLabel}</Typography>
        </Button>
      </div>
    </div>
  );
};

FullPageMessage.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  iconVariant: PropTypes.oneOf(["info", "error"]),
  onButtonClick: PropTypes.func.isRequired,
};

export default FullPageMessage;
