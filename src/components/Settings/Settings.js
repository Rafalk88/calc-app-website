import React from 'react';
import PropTypes from 'prop-types';

import Typography from "../../components/Typography";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import SettingsAvatar from "../Icons/SettingsAvatar";
import AddIcon from "../Icons/AddIcon";

import classes from "./styles.module.css";

export const Settings = (props) => {
  const { className, ...otherProps } = props;
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <div className={classes.headerContainer}>
        <Typography variant={"title1"} className={classes.settingsPageheader}>
          Settings {`>`} Edit Profile
        </Typography>
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.asideWrapper}>
          <div className={classes.asideAvatar}>
            <div className={classes.avatar}>
              <SettingsAvatar />
            </div>
            <Typography variant={"h5-light"} className={classes.addIconBtn}>
              <AddIcon /> ADD NEW AVATAR
            </Typography>
          </div>
          <div className={classes.asideMenu}>
            <div className={`${classes.basicMenuBtn} ${classes.menuBtn}`}>
              <Typography variant={"h5-light"}>Profile</Typography>
            </div>
            <div
              className={`${classes.basicMenuBtn} ${classes.menuBtn} ${classes.menuBtn_disabled}`}
            >
              <Typography variant={"h5-light"} disabled={true}>
                Password
              </Typography>
            </div>
            <div className={`${classes.basicMenuBtn} ${classes.deleteBtn}`}>
              <Typography variant={"h5-light"}>Delete Account</Typography>
            </div>
            <div className={`${classes.basicMenuBtn} ${classes.menuBtn}`}>
              <Typography variant={"h5-light"}>Log Out</Typography>
            </div>
          </div>
        </div>
        <div className={classes.inputsFieldWrapper}>
          <Typography variant={"h5-light"}>E-mail</Typography>
          <TextField className={`${classes.inputField} ${classes.maxWidth}`} />
          <div className={classes.usernameWrapper}>
            <div className={classes.userNameField}>
              <Typography variant={"h5-light"}>First name</Typography>
              <TextField
                className={`${classes.inputField} ${classes.firstnameSpace}`}
              />
            </div>
            <div
              className={`${classes.userNameField} ${classes.lastnameSpace}`}
            >
              <Typography variant={"h5-light"}>Last name</Typography>
              <TextField className={`${classes.inputField}`} />
            </div>
          </div>
          <Typography variant={"h5-light"}>Company</Typography>
          <TextField className={`${classes.inputField} ${classes.maxWidth}`} />
          <Typography variant={"h5-light"}>Workplace</Typography>
          <TextField className={`${classes.inputField} ${classes.maxWidth}`} />
          <Typography variant={"h5-light"}>Time zone</Typography>
          <TextField className={`${classes.inputField} ${classes.maxWidth}`} />
          <Typography variant={"h5-light"}>Language of the website</Typography>
          <TextField className={`${classes.inputField} ${classes.maxWidth}`} />
          <div className={classes.buttonsSection}>
            <Button
              className={classes.button}
              variant={"contained"}
              color={"secondary"}
            >
              <Typography variant={"h5-bold"}>Go back</Typography>
            </Button>
            <Button
              className={classes.button}
              variant={"contained"}
              color={"primary"}
            >
              <Typography variant={"h5-bold"}>Save changes</Typography>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

Settings.propTypes ={
  className: PropTypes.string,
};

export default Settings;
