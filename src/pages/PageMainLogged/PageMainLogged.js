import React from "react";
import PropTypes from "prop-types";

import MainLayout from "../../components/MainLayout";
import Logo from "../../components/LoginForm/Logo";
import User from "../../components/User";
import List from "../../components/List";
import ListItem from "../../components/ListItem/ListItem";
import Footer from "../../components/Footer";

import classes from "./styles.module.css";

export const PageMainLogged = (props) => {
  const { className, contentMain, onClickLogOut, ...otherProps } = props;

  const [isUserDropdownOpen, setIsUserDropdownOpen] = React.useState(false);
  const [procedureInput, setProcedureInput] = React.useState([]);
  const [timeInput, setTimeInput] = React.useState("");
  const [searchPhrase, setSearchPhrase] = React.useState("");
  const [outputData, setOutputData] = React.useState([]);

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
        contentMain={contentMain}
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
