import React from "react";
import PropTypes from "prop-types";

import CountingAppIcon from "../Icons/CountingAppIcon";

import Typography from "../Typography";
import Button from "../Button";

import classes from "./styles.module.css";

export const MainPage = (props) => {
  const {
    className,
    userName,
    onClickAppPage,
    onClickDBPage,
    onClickStatistic,
    ...otherProps
  } = props;
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <div className={classes.mainPageHeader}>
        <Typography variant={"title1"}>
          Welcome, {userName ? userName : "Guest"}!{" "}
        </Typography>
        <Typography className={classes.headersubTitle} variant={"h3-light"}>
          Choose what you want to do...
        </Typography>
      </div>
      <div className={classes.buttonSection}>
        <Button
          className={classes.mainPageButton}
          variant={"main_menu"}
          onClick={onClickAppPage}
        >
          <CountingAppIcon className={classes.icon} />
          <Typography variant={"h3-bold"}>START COUNTING APP</Typography>
        </Button>
        <Button
          className={classes.mainPageButton}
          variant={"main_menu"}
          onClick={onClickDBPage}
        >
          EDIT DATABASE
        </Button>
        <Button
          className={classes.mainPageButton}
          variant={"main_menu"}
          onClick={onClickStatistic}
        >
          STATISTICS
        </Button>
      </div>
    </div>
  );
};

MainPage.propTypes = {
  className: PropTypes.string,
  userName: PropTypes.string,
  onClickAppPage: PropTypes.func.isRequired,
  onClickDBPage: PropTypes.func.isRequired,
  onClickStatistic: PropTypes.func.isRequired,
};

export default MainPage;
