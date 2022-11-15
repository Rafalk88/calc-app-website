import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.css";

export const AppBar = (props) => {
  const { className, children, ...otherProps } = props;
  return (
    <nav
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <div className={classes.container}>{children}</div>
    </nav>
  );
};

AppBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default AppBar;
