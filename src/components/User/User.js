import React from "react";
import PropTypes from "prop-types";

import Typography from "../Typography";

import classes from "./styles.module.css";

export const User = (props) => {
  const { className, userFirstName, userEmail, userAvatar, ...otherProps } =
    props;

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <div className={classes.textWrapper}>
        <Typography variant={"title2"}>{userFirstName || "- . -"}</Typography>
        <Typography variant={"title3"}>{userEmail}</Typography>
      </div>
      <div className={classes.avatarWrapper}></div>
    </div>
  );
};

User.propTypes = {
  className: PropTypes.string,
  userFirstName: PropTypes.string,
  userEmail: PropTypes.string,
  userAvatar: PropTypes.string,
};

export default User;
