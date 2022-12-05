import React from "react";
import PropTypes from "prop-types";

import AppBar from "../AppBar";
import FullPageLayout from "../FullPageLayout";
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
        <Container className={classes.appBarContainer}>
          {contentAppBar}
        </Container>
      </AppBar>
      <FullPageLayout className={classes.contentMainWrapper}>
        <Container>{contentMain}</Container>
      </FullPageLayout>
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
