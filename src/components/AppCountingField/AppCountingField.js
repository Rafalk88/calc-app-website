import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";

import Typography from "../Typography";
import TextField from "../TextField";
import IconInfoAppCountingPage from "../Icons/IconInfoAppCountingPage";
import IconPlusAppCounting from "../Icons/IconPlusAppCounting";
import IconMinusAppCounting from "../Icons/IconMinusAppCounting";
import CountingAppPopUpInfoPage from "../CountingAppPopUpInfoPage";

import classes from "./styles.module.css";

export const AppCountingField = (props) => {
  const { className, database, ...otherProps } = props;

  const [isInfoShown, setInfoShown] = React.useState([false, false, false]);
  const [isIconShown, setIconShown] = React.useState("plus");

  const {
    register,
    setFocus,
    formState: { errors },
  } = useFormContext();

  const registerTimeInput = register("timeInput", {
    required: {
      value: true,
      message: "Field is required.",
    },
  });

  const registerProcedureInput = register("procedureInput", {
    required: {
      value: true,
      message: "Field is required.",
    },
    maxLength: {
      value: 4,
      message: "You must type max 4 digits.",
    },
    validate: (procedureInput) =>
      database.find((obj) => obj.id === procedureInput) ||
      "Invalid procedure code.",
  });
  const registerProcedureCode = register("procedureCode");
  const registerProcedureTime = register("procedureTime");
  const registerStartTime = register("startTime");
  const registerEndTime = register("endTime");

  React.useEffect(() => {
    setFocus("timeInput");
  }, [setFocus]);

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
      <div className={classes.tableBodyWrapper}>
        <TextField
          className={classes.textField}
          inputAditionalClass={classes.inputCenterText}
          type={"number"}
          placeholder={"Type 93.00000..."}
          errorMessage={errors.procedureInput && errors.procedureInput.message}
          {...registerProcedureInput}
        />
        <TextField
          className={`${classes.textField} ${classes.textField__modified}`}
          inputAditionalClass={classes.inputCenterText}
          defaultValue={""}
          {...registerProcedureCode}
          disabled={true}
        />
        <TextField
          className={`${classes.textField} ${classes.textField__modified}`}
          inputAditionalClass={classes.inputCenterText}
          defaultValue={""}
          {...registerProcedureTime}
          disabled={true}
        />
        <TextField
          className={`${classes.textField} ${classes.textField__modified}`}
          inputAditionalClass={classes.inputCenterText}
          defaultValue={""}
          {...registerStartTime}
          disabled={true}
        />
        <TextField
          className={`${classes.textField} ${classes.textField__modified}`}
          inputAditionalClass={classes.inputCenterText}
          defaultValue={""}
          {...registerEndTime}
          disabled={true}
        />
        {isIconShown === "plus" ? (
          <IconPlusAppCounting
            className={classes.Icon}
            onClick={() => setIconShown("minus")}
          />
        ) : isIconShown === "minus" ? (
          <IconMinusAppCounting
            className={classes.Icon}
            onClick={() => setIconShown("plus")}
          />
        ) : null}
      </div>
    </div>
  );
};

AppCountingField.propTypes = {
  className: PropTypes.string,
  database: PropTypes.arrayOf(PropTypes.object),
};

export default AppCountingField;
