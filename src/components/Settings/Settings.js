import React from 'react';
import PropTypes from 'prop-types';

import Typography from "../../components/Typography";
import TextField from "../../components/TextField";
import Button from "../../components/Button";

import classes from "./styles.module.css";

export const Settings = (props) => {
  const { className, ...otherProps } = props;
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <Typography variant={"title1"} className={classes.settingsPageheader}>
        Settings {`>`} Edit Profile
      </Typography>
      <div className={classes.asideWrapper}></div>
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
          <div className={`${classes.userNameField} ${classes.lastnameSpace}`}>
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
      </div>
      <div className={classes.buttonsSection}>
        <Button
          className={classes.button}
          variant={"contained"}
          color={"secondary"}
        >
          Go back
        </Button>
        <Button
          className={classes.button}
          variant={"contained"}
          color={"primary"}
        >
          Save changes
        </Button>
      </div>
    </div>
  );
};

Settings.propTypes ={
  className: PropTypes.string,
};

export default Settings;
