import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.css";

export const User = (props) => {
  const { className, ...otherProps } = props;
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      User
    </div>
  );
};

User.propTypes = {
  className: PropTypes.string,
};

export default User;
