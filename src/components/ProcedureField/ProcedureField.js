import React from "react";
import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import { GlobalDataContext } from "../../contexts/GlobalDataContext";
import TextField from "../TextField";

import classes from "./styles.module.css";

const procedureInputOptions = {
  required: {
    value: true,
    message: "Field is required.",
  },
  maxLength: {
    value: 4,
    message: "You must type max 4 digits.",
  },
};

const otherInputsOptions = {
  disabled: true,
};

export const ProcedureField = (props) => {
  const { className, names, ...otherProps } = props;

  const database = React.useContext(GlobalDataContext);

  const {
    register,
    formState: { errors },
    isValid,
  } = useFormContext();

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <div className={classes.fieldWrapper}>
        <TextField
          className={classes.textField}
          inputAditionalClass={classes.inputCenterText}
          type={"number"}
          placeholder={"Type 93.00000..."}
          displayErrorText={false}
          {...register(names[0], {
            ...procedureInputOptions,
            validate: (inputValue) =>
              database.find((obj) => obj.id === inputValue) ||
              "Invalid procedure code.",
          })}
          errorMessage={isValid}
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
