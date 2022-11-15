import React from "react";
import PropTypes from "prop-types";

import Typography from "../Typography";
import Avatar from "../Avatar";

import classes from "./styles.module.css";

export const User = (props) => {
  const {
    className,
    userFirstName,
    userEmail,
    userAvatar,
    contentList,
    ...otherProps
  } = props;

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <div className={classes.wrapper}>
        <div className={classes.textWrapper}>
          <Typography className={classes.userFirstName} variant={"title2"}>
            {userFirstName || "- . -"}
          </Typography>
          <Typography className={classes.userEmail} variant={"title3"}>
            {userEmail}
          </Typography>
        </div>
        <div className={classes.avatarWrapper}>
          <Avatar src={userAvatar} />
        </div>
      </div>
      {contentList ? (
        <div className={classes.listContainer}>{contentList}</div>
      ) : null}
    </div>
  );
};

User.propTypes = {
  className: PropTypes.string,
  userFirstName: PropTypes.string,
  userEmail: PropTypes.string,
  userAvatar: PropTypes.string,
  contentList: PropTypes.node,
};

export default User;
