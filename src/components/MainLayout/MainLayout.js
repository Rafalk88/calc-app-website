import React from "react";
import PropTypes from "prop-types";

import AppBar from "../AppBar";
import Container from "../Container";

import classes from "./styles.module.css";

export const MainLayout = (props) => {
  const { className, contentAppBar, contentMain, ...otherProps } = props;
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <AppBar>
        <Container>{contentAppBar}</Container>
      </AppBar>
      <div className={classes.contentMainWrapper}>
        <Container>{contentMain}</Container>
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  className: PropTypes.string,
  contentAppBar: PropTypes.node,
  contentMain: PropTypes.node,
};

export default MainLayout;
