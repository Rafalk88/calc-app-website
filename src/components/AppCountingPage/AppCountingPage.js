import React from 'react';
import PropTypes from 'prop-types';
import { useOutletContext } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";

import Typography from "../Typography";
import Link from "../Link";
import AppCountingField from "../AppCountingField";
import Button from "../Button";

import classes from "./styles.module.css";

export const AppCountingPage = (props) => {
  const { className, database, ...otherProps } = props;

  const [onClickBackToLogin] = useOutletContext();

  const methods = useForm();
  const { handleSubmit, setValue, reset } = methods;

  const countData = (data) => {
    database.map((obj) => {
      if (obj.id === data.procedureInput) {
        let now = new Date();
        now.setHours(data.timeInput.split(":")[0]);
        now.setMinutes(data.timeInput.split(":")[1]);
        now.setHours(now.getHours() + parseInt(obj.time.split(":")[0]));
        now.setMinutes(now.getMinutes() + parseInt(obj.time.split(":")[1]));
        let hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
        let minutes =
          now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();

        setValue("procedureCode", obj.settlementProduct);
        setValue("procedureTime", obj.time);
        setValue("startTime", data.timeInput);
        setValue("endTime", `${hour}:${minutes}`);
      }
    });
  };

  const clearBtn = React.useCallback(() => {
    reset();
  }, [reset]);

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
          <AppCountingField database={database} />
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
