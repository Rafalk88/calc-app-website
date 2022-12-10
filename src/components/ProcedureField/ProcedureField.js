import React from "react";
import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";

import TextField from "../TextField";
import IconPlusAppCounting from "../Icons/IconPlusAppCounting";
import IconMinusAppCounting from "../Icons/IconMinusAppCounting";

import classes from "./styles.module.css";

export const ProcedureField = (props) => {
  const { className, database, fieldId, ...otherProps } = props;

  const [isIconShown, setIconShown] = React.useState("plus");

  const {
    formState: { errors },
    control,
  } = useFormContext();

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <div className={classes.fieldWrapper}>
        <Controller
          control={control}
          name={`procedureInput_${fieldId}`}
          render={({ field }) => (
            <TextField
              {...field}
              className={classes.textField}
              inputAditionalClass={classes.inputCenterText}
              type={"number"}
              placeholder={"Type 93.00000..."}
              displayErrorText={false}
              errorMessage={
                eval("errors.procedureInput_" + fieldId) &&
                eval("errors.procedureInput_" + fieldId).message
              }
            />
          )}
          defaultValue=""
          rules={{
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
          }}
        />
        <Controller
          control={control}
          name={`procedureCode_${fieldId}`}
          render={({ field }) => (
            <TextField
              {...field}
              className={`${classes.textField} ${classes.textField__modified}`}
              inputAditionalClass={classes.inputCenterText}
              disabled={true}
            />
          )}
          defaultValue=""
        />
        <Controller
          control={control}
          name={`procedureTime_${fieldId}`}
          render={({ field }) => (
            <TextField
              {...field}
              className={`${classes.textField} ${classes.textField__modified}`}
              inputAditionalClass={classes.inputCenterText}
              disabled={true}
            />
          )}
          defaultValue=""
        />
        <Controller
          control={control}
          name={`startTime_${fieldId}`}
          render={({ field }) => (
            <TextField
              {...field}
              className={`${classes.textField} ${classes.textField__modified}`}
              inputAditionalClass={classes.inputCenterText}
              disabled={true}
            />
          )}
          defaultValue=""
        />
        <Controller
          control={control}
          name={`endTime_${fieldId}`}
          render={({ field }) => (
            <TextField
              {...field}
              className={`${classes.textField} ${classes.textField__modified}`}
              inputAditionalClass={classes.inputCenterText}
              disabled={true}
            />
          )}
          defaultValue=""
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
      {eval("errors.procedureInput_" + fieldId) ? (
        <div className={classes.errorMessage}>
          {eval("errors.procedureInput_" + fieldId).message}
        </div>
      ) : (
        <div className={classes.spaceForError}></div>
      )}
    </div>
  );
};

ProcedureField.propTypes = {
  className: PropTypes.string,
  fieldId: PropTypes.string,
};

export default ProcedureField;
