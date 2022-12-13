import React from 'react';
import PropTypes from 'prop-types';
import { useOutletContext } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { useList } from "react-use";

import { GlobalDataContext } from "../../contexts/GlobalDataContext";
import Typography from "../Typography";
import Link from "../Link";
import AppCountingHeader from "../AppCountingHeader";
import Button from "../Button";
import ProcedureField from "../ProcedureField";
import IconPlusAppCounting from "../Icons/IconPlusAppCounting";
import IconMinusAppCounting from "../Icons/IconMinusAppCounting";
import { APPCOUTINGPAGE } from "../../headers";

import classes from "./styles.module.css";

const listInitialState = [false, false, false];
const filedsInitialState = [
  {
    id: 0,
    isDisplayed: true,
    additionalIcon: "plus",
    component: (
      <ProcedureField
        names={[
          "procedureInput_0",
          "procedureCode_0",
          "procedureTime_0",
          "startTime_0",
          "endTime_0",
        ]}
      />
    ),
  },
  {
    id: 1,
    isDisplayed: false,
    additionalIcon: "plus",
    component: (
      <ProcedureField
        names={[
          "procedureInput_1",
          "procedureCode_1",
          "procedureTime_1",
          "startTime_1",
          "endTime_1",
        ]}
      />
    ),
  },
  {
    id: 2,
    isDisplayed: false,
    additionalIcon: "plus",
    component: (
      <ProcedureField
        names={[
          "procedureInput_2",
          "procedureCode_2",
          "procedureTime_2",
          "startTime_2",
          "endTime_2",
        ]}
      />
    ),
  },
  {
    id: 3,
    isDisplayed: false,
    additionalIcon: "plus",
    component: (
      <ProcedureField
        names={[
          "procedureInput_3",
          "procedureCode_3",
          "procedureTime_3",
          "startTime_3",
          "endTime_3",
        ]}
      />
    ),
  },
  {
    id: 4,
    isDisplayed: false,
    additionalIcon: "minus",
    component: (
      <ProcedureField
        names={[
          "procedureInput_4",
          "procedureCode_4",
          "procedureTime_4",
          "startTime_4",
          "endTime_4",
        ]}
      />
    ),
  },
];
let now = new Date();

export const AppCountingPage = (props) => {
  const { className, ...otherProps } = props;

  const [list, { updateAt, reset: resetReactUse }] = useList(listInitialState);
  const [fields, setFields] = React.useState(filedsInitialState);

  const [onClickBackToLogin] = useOutletContext();
  const database = React.useContext(GlobalDataContext);
  const methods = useForm({ defaultValues: "" });
  const {
    formState: { isDirty },
    getValues,
    handleSubmit,
    reset,
    setFocus,
    setValue,
  } = methods;

  const countData = (data) => {
    fields.map((field, index) => {
      if (field.isDisplayed === true) {
        database.map((obj) => {
          if (obj.id === getValues(`procedureInput_${field.id}`)) {
            if (index === 0) {
              now.setHours(data.timeInput.split(":")[0]);
              now.setMinutes(data.timeInput.split(":")[1]);
            }

            if (index > 0) {
              now.setHours(getValues(`endTime_${field.id - 1}`).split(":")[0]);
              now.setMinutes(
                Number(getValues(`endTime_${field.id - 1}`).split(":")[1]) + 1
              );
            }

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
      }
    });
  };

  const onClickClearBtn = React.useCallback(() => {
    setFields(filedsInitialState);
    reset();
  }, [setFields]);

  const handleSearchIndex = React.useCallback(
    (fnName, displayValue) => {
      if (fnName === "findIndex") {
        const searchIndex = fields.findIndex(
          (field) => field.isDisplayed === displayValue
        );
        return searchIndex;
      }
      if (fnName === "findLastIndex") {
        const searchIndex = fields.findLastIndex(
          (field) => field.isDisplayed === true
        );
        return searchIndex;
      }
      return searchIndex;
    },
    [fields]
  );

  const toogleProcedureField = React.useCallback(
    (fnName, displayValue, iconValue) => {
      let searchIndex = handleSearchIndex(fnName, displayValue);
      setFields((fields) => {
        return fields.map((field, index) => {
          if (index === searchIndex - 1)
            return { ...field, additionalIcon: iconValue };
          if (index === searchIndex) {
            return { ...field, isDisplayed: !displayValue };
          }
          return { ...field };
        });
      });
    },
    [fields, setFields]
  );

  const handleKeyDown = (e) => {
    if (e.key === "w" && fields[1].isDisplayed)
      toogleProcedureField("findLastIndex", true, "plus");
    if (e.key === "s") toogleProcedureField("findIndex", false, "minus");
    if (e.key === "r") onClickClearBtn();
  };

  React.useEffect(() => {
    !isDirty ? setFocus("timeInput") : null;
  }, [setFocus, isDirty]);

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
      onKeyDown={handleKeyDown}
    >
      <Typography className={classes.title} variant={"title1"}>
        Counting procedures app
      </Typography>
      <Typography className={classes.header} variant={"title3"}>
        {APPCOUTINGPAGE}
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(countData)}>
          <AppCountingHeader
            list={list}
            updateAt={updateAt}
            resetReactUse={resetReactUse}
          />
          {fields.map((field, index) => {
            return (
              <div key={index} className={classes.procedureFieldWrapper}>
                {field.isDisplayed === true ? field.component : null}
                {field.isDisplayed === true &&
                field.additionalIcon === "plus" ? (
                  <IconPlusAppCounting
                    className={classes.Icon}
                    onClick={() =>
                      toogleProcedureField("findIndex", false, "minus")
                    }
                  />
                ) : field.isDisplayed === true &&
                  field.additionalIcon === "minus" ? (
                  <IconMinusAppCounting
                    className={classes.Icon}
                    onClick={() =>
                      toogleProcedureField("findLastIndex", true, "plus")
                    }
                  />
                ) : null}
              </div>
            );
          })}
          <div className={classes.buttonSection}>
            <Link className={classes.link}>
              <Typography variant={"h5-bold"} onClick={onClickClearBtn}>
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
};

export default AppCountingPage;
