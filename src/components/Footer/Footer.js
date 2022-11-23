import React from "react";
import PropTypes from "prop-types";

import Typography from "../Typography";

import classes from "./styles.module.css";

export const Footer = (props) => {
  const { className, ...otherProps } = props;
  return (
    <footer
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <div className={classes.footerWrapper}>
        <Typography variant={"title3"}>Rafal Kochanecki</Typography>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
