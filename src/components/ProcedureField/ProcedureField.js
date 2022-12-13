import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { GlobalDataContext } from "../../contexts/GlobalDataContext";
import TextField from "../TextField";
import {
  PROC_INPUT_IS_REQ_ERROR,
  PROC_INPUT_LENGTH_ERROR,
  PROC_INPUT_VALIDATION_ERROR,
} from "../../consts";

import classes from "./styles.module.css";

const procedureInputOptions = {
  required: {
    value: true,
    message: PROC_INPUT_IS_REQ_ERROR,
  },
  maxLength: {
    value: 4,
    message: PROC_INPUT_LENGTH_ERROR,
  },
};

const otherInputsOptions = {
  disabled: true,
};

export const ProcedureField = (props) => {
  const { className, names, ...otherProps } = props;

  const database = React.useContext(GlobalDataContext);

  const {
    formState: { errors },
    isValid,
    register,
  } = useFormContext();

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <div className={classes.fieldWrapper}>
        <TextField
          className={classes.textField}
          displayErrorText={false}
          errorMessage={isValid}
          inputAditionalClass={classes.inputCenterText}
          placeholder={"Type 93.00000..."}
          type={"number"}
          {...register(names[0], {
            ...procedureInputOptions,
            validate: (inputValue) =>
              database.find((obj) => obj.id === inputValue) ||
              PROC_INPUT_VALIDATION_ERROR,
          })}
        />
        <TextField
          className={`${classes.textField} ${classes.textField__modified}`}
          inputAditionalClass={classes.inputCenterText}
          {...register(names[1], otherInputsOptions)}
        />
        <TextField
          className={`${classes.textField} ${classes.textField__modified}`}
          inputAditionalClass={classes.inputCenterText}
          {...register(names[2], otherInputsOptions)}
        />
        <TextField
          className={`${classes.textField} ${classes.textField__modified}`}
          inputAditionalClass={classes.inputCenterText}
          {...register(names[3], otherInputsOptions)}
        />
        <TextField
          className={`${classes.textField} ${classes.textField__modified}`}
          inputAditionalClass={classes.inputCenterText}
          {...register(names[4], otherInputsOptions)}
        />
      </div>
      {isValid ? (
        <ErrorMessage
          errors={errors}
          name={names[0]}
          render={(message) => (
            <div className={classes.errorMessage}>{message}</div>
          )}
        />
      ) : (
        <div className={classes.spaceForError}></div>
      )}
    </div>
  );
};

ProcedureField.propTypes = {
  className: PropTypes.string,
  names: PropTypes.arrayOf(PropTypes.string),
};

export default ProcedureField;
