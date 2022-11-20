import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.css";

export const Button = (props) => {
  const { className, children, variant, color, ...otherProps } = props;

  const variantClass = classes[variant];
  const colorClass = classes[color];

  return (
    <button
      className={`${classes.root}${className ? ` ${className}` : ""}${
        variantClass ? ` ${variantClass}` : ""
      }${colorClass ? ` ${colorClass}` : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(["contained", "text", "main_menu"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
