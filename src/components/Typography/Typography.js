import React from "react";
import PropTypes from "prop-types";

import classes from "./styles.module.css";

export const Typography = (props) => {
  const { className, children, variant, ...otherProps } = props;

  const variantClass = classes[variant];

  return (
    <span
      className={`${classes.root}${className ? ` ${className}` : ""}${
        variantClass ? ` ${variantClass}` : ""
      }`}
      {...otherProps}
    >
      {children}
    </span>
  );
};

Typography.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    "title1",
    "title2",
    "title3",
    "h1-bold",
    "h2-bold",
    "h3-bold",
    "h5-light",
    "h6-light",
    "h4-extraLight",
  ]),
};

export default Typography;
