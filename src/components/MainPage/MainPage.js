import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { useAuthUser } from "../../contexts/UserContext";
import CountingAppIcon from "../Icons/CountingAppIcon";
import Typography from "../Typography";
import Button from "../Button";

import classes from "./styles.module.css";

export const MainPage = (props) => {
  const { className, ...otherProps } = props;

  const { userFirstName } = useAuthUser();
  const navigate = useNavigate();

  const onClickAppPage = React.useCallback(() => {
    navigate("app-page");
  }, [navigate]);

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <div className={classes.mainPageHeader}>
        <Typography variant={"title1"}>
          Welcome, {userFirstName ? userFirstName : "Guest"}!{" "}
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
      </div>
    </div>
  );
};

MainPage.propTypes = {
  className: PropTypes.string,
};

export default MainPage;
