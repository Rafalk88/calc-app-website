import React from "react";
import PropTypes from "prop-types";
import { Outlet, useNavigate } from "react-router-dom";

import MainLayout from "../../components/MainLayout";
import LogoForIsLoaded from "../../components/Icons/LogoForIsLoaded";
import User from "../../components/User";
import List from "../../components/List";
import ListItem from "../../components/ListItem/ListItem";
import Footer from "../../components/Footer";

import classes from "./styles.module.css";

export const PageMainLogged = (props) => {
  const { className, contentMain, onClickLogOut, ...otherProps } = props;

  const [isUserDropdownOpen, setIsUserDropdownOpen] = React.useState(false);
  const [searchPhrase, setSearchPhrase] = React.useState("");
  const [outputData, setOutputData] = React.useState([]);

  const navigate = useNavigate();
  const onClickBackToLogin = React.useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ""}`}
      {...otherProps}
    >
      <MainLayout
        contentAppBar={
          <>
            <LogoForIsLoaded className={classes.logo} />
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
        contentMain={<Outlet context={[onClickBackToLogin]} />}
        footer={<Footer />}
      />
    </div>
  );
};

PageMainLogged.propTypes = {
  className: PropTypes.string,
  contentMain: PropTypes.node,
  onClickLogOut: PropTypes.func.isRequired,
};

export default PageMainLogged;
