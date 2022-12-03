import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.css";

export const Link = (props) => {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <a className={classes.a}>{children}</a>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Link;
