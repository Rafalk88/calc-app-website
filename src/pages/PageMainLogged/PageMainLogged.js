import React from "react";
import PropTypes from "prop-types";
import { Routes, Route, useNavigate } from "react-router-dom";

import MainLayout from "../../components/MainLayout";
import Logo from "../../components/LoginForm/Logo";
import User from "../../components/User";
import List from "../../components/List";
import ListItem from "../../components/ListItem/ListItem";
import MainPage from "../../components/MainPage";
import Footer from "../../components/Footer";
import AppCountingPage from "../../components/AppCountingPage";

import classes from "./styles.module.css";

export const PageMainLogged = (props) => {
  const { className, onClickLogOut, ...otherProps } = props;

  const [isUserDropdownOpen, setIsUserDropdownOpen] = React.useState(false);
  const [procedureInput, setProcedureInput] = React.useState([]);
  const [timeInput, setTimeInput] = React.useState("");
  const [searchPhrase, setSearchPhrase] = React.useState("");
  const [outputData, setOutputData] = React.useState([]);

  const navigate = useNavigate();
  const onClickAppPage = React.useCallback(
    () => navigate("app-page"),
    [navigate]
  );

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <MainLayout
        contentAppBar={
          <>
            <Logo className={classes.logo} />
            <User
              className={classes.user}
              onOpenRequested={() => setIsUserDropdownOpen(() => true)}
              onCloseRequested={() => setIsUserDropdownOpen(() => false)}
              contentList={
                isUserDropdownOpen ? (
                  <List>
                    <ListItem
                      icon={"settings"}
                      text={"Settings"}
                      disabled={true}
                    />
                    <ListItem
                      icon={"support"}
                      text={"Support"}
                      disabled={true}
                    />
                    <ListItem
                      icon={"log-out"}
                      text={"Log Out"}
                      onClick={onClickLogOut}
                    />
                  </List>
                ) : null
              }
            />
          </>
        }
        contentMain={
          //<Routes>
          //  <Route
          //    path={"/main-page"}
          //    element={
          <MainPage
            onClickAppPage={onClickAppPage}
            onClickDBPage={() => console.log("DBPageButton")}
            onClickStatistic={() => console.log("StatisticButton")}
          />
          //    }
          //  />

          //</div>  <Route path={"/main-page"} element={<AppCountingPage />} />
          //</Routes>
        }
        footer={<Footer />}
      />
    </div>
  );
};

PageMainLogged.propTypes = {
  className: PropTypes.string,
  onClickLogOut: PropTypes.func.isRequired,
};

export default PageMainLogged;
