import React from "react";
import PropTypes from "prop-types";

import Typography from "../Typography";
import SettingsIcon from "./SettingsIcon";
import SupportIcon from "./SupportIcon";
import LogOutIcon from "./LogOutIcon";

import classes from "./styles.module.css";

export const ListItem = (props) => {
  const { className, text, icon, disabled = false, ...otherProps } = props;
  return (
    <li
      className={`${classes.root}${className ? ` ${className}` : ""}${
        disabled ? ` ${classes.disabled}` : ""
      }`}
      {...otherProps}
    >
      <div className={classes.iconWrapper}>
        {icon === "settings" ? (
          <SettingsIcon />
        ) : icon === "support" ? (
          <SupportIcon />
        ) : icon === "log-out" ? (
          <LogOutIcon />
        ) : null}
      </div>
      <div className={classes.textWrapper}>
        <Typography className={classes.text} variant={"h5-light"}>
          {text}
        </Typography>
      </div>
    </li>
  );
};

ListItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.oneOf(["settings", "support", "log-out"]),
  disabled: PropTypes.bool,
};

export default ListItem;
