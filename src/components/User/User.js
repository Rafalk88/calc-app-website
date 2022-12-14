import React from "react";
import PropTypes from "prop-types";

import { useAuthUser } from "../../contexts/UserContext";
import Typography from "../Typography";
import Avatar from "../Avatar";

import classes from "./styles.module.css";

export const User = (props) => {
  const {
    className,
    contentList,
    onOpenRequested,
    onCloseRequested,
    ...otherProps
  } = props;

  const { userFirstName, userEmail, userAvatar } = useAuthUser();

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <div className={classes.wrapper} onClick={onOpenRequested}>
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
        <>
          <div className={classes.overlay} onClick={onCloseRequested}></div>
          <div className={classes.listContainer}>{contentList}</div>
        </>
      ) : null}
    </div>
  );
};

User.propTypes = {
  className: PropTypes.string,
  contentList: PropTypes.node,
  onOpenRequested: PropTypes.func.isRequired,
  onCloseRequested: PropTypes.func.isRequired,
};

export default User;
