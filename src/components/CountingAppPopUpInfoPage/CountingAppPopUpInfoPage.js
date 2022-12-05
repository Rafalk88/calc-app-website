import React from "react";
import PropTypes from "prop-types";

import Typography from "../Typography";

import classes from "./styles.module.css";

export const CountingAppPopUpInfoPage = (props) => {
  const { className, ...otherProps } = props;
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <Typography variant={"title3"}>The unit is [ HH : MM ]</Typography>
    </div>
  );
};

CountingAppPopUpInfoPage.propTypes = {
  className: PropTypes.string,
};

export default CountingAppPopUpInfoPage;
