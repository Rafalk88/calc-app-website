import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";

import Typography from "../Typography";
import TextField from "../TextField";
import IconInfoAppCountingPage from "../Icons/IconInfoAppCountingPage";
import CountingAppPopUpInfoPage from "../CountingAppPopUpInfoPage";

import classes from "./styles.module.css";

export const AppCountingHeader = (props) => {
  const { className, infoShown, ...otherProps } = props;
  const [isInfoShown, setInfoShown] = infoShown;

  const {
    register,
    formState: { errors },
  } = useFormContext();

  const registerTimeInput = register("timeInput", {
    required: {
      value: true,
      message: "Field is required.",
    },
  });

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <div className={classes.tableHeaderWrapper}>
        <TextField
          className={classes.textField}
          inputAditionalClass={classes.inputCenterText}
          type={"time"}
          displayErrorText={false}
          errorMessage={errors.timeInput && errors.timeInput.message}
          {...registerTimeInput}
        />
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
            onClick={() => setInfoShown(() => [true, false, false])}
          />
          {isInfoShown[0] ? (
            <>
              <div
                className={classes.InfoPageOverlay}
                onClick={() => setInfoShown(() => [false, false, false])}
              ></div>
              <div className={classes.InfoPageContainer}>
                <CountingAppPopUpInfoPage />
              </div>
            </>
          ) : null}
        </div>
        <div className={classes.tableHeaderField}>
          <Typography variant={"title3"} className={classes.tableHeaderText}>
            Start time
          </Typography>
          <IconInfoAppCountingPage
            className={classes.tableHeaderIcon}
            onClick={() => setInfoShown(() => [false, true, false])}
          />
          {isInfoShown[1] ? (
            <>
              <div
                className={classes.InfoPageOverlay}
                onClick={() => setInfoShown(() => [false, false, false])}
              ></div>
              <div className={classes.InfoPageContainer}>
                <CountingAppPopUpInfoPage />
              </div>
            </>
          ) : null}
        </div>
        <div className={classes.tableHeaderField}>
          <Typography variant={"title3"} className={classes.tableHeaderText}>
            End time
          </Typography>
          <IconInfoAppCountingPage
            className={classes.tableHeaderIcon}
            onClick={() => setInfoShown(() => [false, false, true])}
          />
          {isInfoShown[2] ? (
            <>
              <div
                className={classes.InfoPageOverlay}
                onClick={() => setInfoShown(() => [false, false, false])}
              ></div>
              <div className={classes.InfoPageContainer}>
                <CountingAppPopUpInfoPage />
              </div>
            </>
          ) : null}
        </div>
      </div>
      {errors.timeInput ? (
        <div className={classes.errorMessage}>{errors.timeInput.message}</div>
      ) : (
        <div className={classes.spaceForError}></div>
      )}
    </div>
  );
};

AppCountingHeader.propTypes = {
  className: PropTypes.string,
  infoShown: PropTypes.array,
};

export default AppCountingHeader;
