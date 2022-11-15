import React from "react";
import PropTypes from "prop-types";

import defaultAvatarSrc from "./default.svg";

import classes from "./styles.module.css";

export const Avatar = (props) => {
  const { className, src, ...otherProps } = props;

  return (
    <img
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      src={src || defaultAvatarSrc}
      alt={"avatar image"}
      {...otherProps}
    />
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
  defaultAvatarSrc: PropTypes.string,
};

export default Avatar;
