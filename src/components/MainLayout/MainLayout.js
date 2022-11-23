import React from "react";
import PropTypes from "prop-types";

import AppBar from "../AppBar";
import Container from "../Container";

import classes from "./styles.module.css";

export const MainLayout = (props) => {
  const { className, contentAppBar, contentMain, footer, ...otherProps } =
    props;
  return (
    <section
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <AppBar>
        <Container>{contentAppBar}</Container>
      </AppBar>
      <main className={classes.contentMainWrapper}>
        <Container>{contentMain}</Container>
      </main>
      {footer}
    </section>
  );
};

MainLayout.propTypes = {
  className: PropTypes.string,
  contentAppBar: PropTypes.node,
  contentMain: PropTypes.node,
  footer: PropTypes.node,
};

export default MainLayout;
