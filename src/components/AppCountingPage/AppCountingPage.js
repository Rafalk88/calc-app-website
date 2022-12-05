import React from 'react';
import PropTypes from 'prop-types';

import Typography from "../Typography";
import TextField from "../TextField";
import IconInfoAppCountingPage from "../Icons/IconInfoAppCountingPage";
import Link from "../Link";
import IconPlusAppCounting from "../Icons/IconPlusAppCounting";
import IconMinusAppCounting from "../Icons/IconMinusAppCounting";
import Button from "../Button";

import classes from "./styles.module.css";

export const AppCountingPage = (props) => {
  const { className, ...otherProps } = props;

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <Typography className={classes.title} variant={"title1"}>
        Counting procedures app
      </Typography>
      <Typography className={classes.header} variant={"title3"}>
        The application counts the start and end time of the given treatments
        after taking into account the time of their initiation. The first step
        will be to enter the time of their start. Then, in the first field,
        enter the appropriate procedure code. If you want to add more
        procedures, use the 'plus' at the end of the table. After approval, the
        application will display the times of treatments as well as their hours.
      </Typography>
      <div>
        <div className={classes.tableHeaderWrapper}>
          <TextField className={classes.textField} type={"time"} />
          <div className={classes.tableHeaderField}>
            <Typography variant={"title3"} className={classes.tableHeaderText}>
              5.11.01.00000...
            </Typography>
          </div>
          <div className={classes.tableHeaderField}>
            <Typography variant={"title3"} className={classes.tableHeaderText}>
              Procedure time
            </Typography>
            <IconInfoAppCountingPage
              className={classes.tableHeaderIcon}
              onClick={() => console.log("IconInfoAppCountingPage")}
            />
          </div>
          <div className={classes.tableHeaderField}>
            <Typography variant={"title3"} className={classes.tableHeaderText}>
              Start time
            </Typography>
            <IconInfoAppCountingPage
              className={classes.tableHeaderIcon}
              onClick={() => console.log("IconInfoAppCountingPage")}
            />
          </div>
          <div className={classes.tableHeaderField}>
            <Typography variant={"title3"} className={classes.tableHeaderText}>
              End time
            </Typography>
            <IconInfoAppCountingPage
              className={classes.tableHeaderIcon}
              onClick={() => console.log("IconInfoAppCountingPage")}
            />
          </div>
        </div>
        <div className={classes.tableBodyWrapper}>
          <TextField
            className={classes.textField}
            type={"number"}
            placeholder={"Type 93.00000..."}
          />
          <TextField
            className={`${classes.textField} ${classes.textField__space}`}
            value={""}
            disabled={true}
          />
          <TextField
            className={`${classes.textField} ${classes.textField__space}`}
            value={""}
            disabled={true}
          />
          <TextField
            className={`${classes.textField} ${classes.textField__space}`}
            value={""}
            disabled={true}
          />
          <TextField
            className={`${classes.textField} ${classes.textField__space}`}
            value={""}
            disabled={true}
          />
          <IconPlusAppCounting
            className={classes.IconPlus}
            onClick={() => console.log("IconPlusAppCounting")}
          />
        </div>
      </div>
      <div className={classes.buttonSection}>
        <Link className={classes.link}>
          <Typography variant={"h5-bold"} onClick={() => console.log("Clear")}>
            Clear
          </Typography>
        </Link>
        <div className={classes.buttons}>
          <Button
            className={classes.button}
            variant={"contained"}
            color={"secondary"}
            onClick={() => console.log("Go Backg")}
          >
            <Typography variant={"h5-bold"}>Go Back</Typography>
          </Button>
          <Button
            className={classes.button}
            variant={"contained"}
            color={"primary"}
            type={"submit"}
            onClick={() => console.log("Count Data")}
          >
            <Typography variant={"h5-bold"}>Count Data</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

AppCountingPage.propTypes ={
  className: PropTypes.string,
};

export default AppCountingPage;
