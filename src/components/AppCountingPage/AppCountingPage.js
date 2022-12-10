import React from 'react';
import PropTypes from 'prop-types';
import { useOutletContext } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";

import Typography from "../Typography";
import Link from "../Link";
import AppCountingField from "../AppCountingField";
import Button from "../Button";
import ProcedureField from "../ProcedureField";

import classes from "./styles.module.css";

const ID = 1;

export const AppCountingPage = (props) => {
  const { className, database, ...otherProps } = props;

  const [isInfoShown, setInfoShown] = React.useState([false, false, false]);
  const [procedureField, setProcedureField] = React.useState([
    {
      id: ID,
      field: (
        <ProcedureField
          key={ID}
          className={classes.procedureWrapper}
          database={database}
          fieldId={`${ID}`}
        />
      ),
    },
    {
      id: 2,
      field: (
        <ProcedureField
          key={2}
          className={classes.procedureWrapper}
          database={database}
          fieldId={"2"}
        />
      ),
    },
    {
      id: 3,
      field: (
        <ProcedureField
          key={3}
          className={classes.procedureWrapper}
          database={database}
          fieldId={"3"}
        />
      ),
    },
  ]);

  const [onClickBackToLogin] = useOutletContext();

  const methods = useForm();
  const {
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { isDirty },
    setFocus,
  } = methods;

  const countData = (data) => {
    procedureField.map((field, i) => {
      database.map((obj) => {
        if (obj.id === eval("data.procedureInput_" + field.id)) {
          let now = new Date();

          now.setHours(
            i === 0
              ? data.timeInput.split(":")[0]
              : getValues(`endTime_${field.id - 1}`).split(":")[0]
          );

          now.setMinutes(
            i === 0
              ? data.timeInput.split(":")[1]
              : Number(getValues(`endTime_${field.id - 1}`).split(":")[1]) + 1
          );

          let hourBefore =
            now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
          let minutesBefore =
            now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();

          now.setHours(now.getHours() + parseInt(obj.time.split(":")[0]));
          now.setMinutes(now.getMinutes() + parseInt(obj.time.split(":")[1]));

          let hourAfter =
            now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
          let minutesAfter =
            now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();

          setValue(`procedureCode_${field.id}`, obj.settlementProduct);
          setValue(`procedureTime_${field.id}`, obj.time);
          setValue(`startTime_${field.id}`, `${hourBefore}:${minutesBefore}`);
          setValue(`endTime_${field.id}`, `${hourAfter}:${minutesAfter}`);
        }
      });
    });
  };

  const clearBtn = React.useCallback(() => {
    reset();
  }, [reset]);

  React.useEffect(() => {
    !isDirty ? setFocus("timeInput") : null;
  }, [setFocus, isDirty]);

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
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(countData)}>
          <AppCountingField
            database={database}
            procedureField={procedureField}
            infoShown={[isInfoShown, setInfoShown]}
          />
          <div className={classes.buttonSection}>
            <Link className={classes.link}>
              <Typography variant={"h5-bold"} onClick={clearBtn}>
                Clear
              </Typography>
            </Link>
            <div className={classes.buttons}>
              <Button
                className={classes.button}
                variant={"contained"}
                color={"secondary"}
                onClick={onClickBackToLogin}
                type={"button"}
              >
                <Typography variant={"h5-bold"}>Go Back</Typography>
              </Button>
              <Button
                className={classes.button}
                variant={"contained"}
                color={"primary"}
                type={"submit"}
              >
                <Typography variant={"h5-bold"}>Count Data</Typography>
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

AppCountingPage.propTypes = {
  className: PropTypes.string,
  database: PropTypes.arrayOf(PropTypes.object),
};

export default AppCountingPage;
