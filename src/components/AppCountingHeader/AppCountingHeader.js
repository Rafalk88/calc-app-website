import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";

import Typography from "../Typography";
import TextField from "../TextField";
import IconInfoAppCountingPage from "../Icons/IconInfoAppCountingPage";
import CountingAppPopUpInfoPage from "../CountingAppPopUpInfoPage";
import { IS_REQ_ERROR } from "../../consts";

import classes from "./styles.module.css";

const options = {
  required: {
    value: true,
    message: IS_REQ_ERROR,
  },
};

export const AppCountingHeader = (props) => {
  const { className, infoShown, ...otherProps } = props;
  const [isInfoShown, setInfoShown] = infoShown;

  const {
    formState: { errors },
    register,
  } = useFormContext();

  const registerTimeInput = register("timeInput", options);

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <div className={classes.tableHeaderWrapper}>
        <TextField
          className={classes.textField}
          displayErrorText={false}
          errorMessage={errors.timeInput && errors.timeInput.message}
          inputAditionalClass={classes.inputCenterText}
          type={"time"}
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
