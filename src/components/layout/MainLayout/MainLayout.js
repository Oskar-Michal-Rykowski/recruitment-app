import React from "react";
import PropTypes from "prop-types";

import styles from "./MainLayout.module.scss";
import { Header } from "../Header/Header";
import { BottomNav } from "../BottomNav/BottomNav";

const Component = ({ children }) => (
  <div className={styles.root}>
    <Header></Header>
    <div className={styles.children}>{children}</div>
    <BottomNav></BottomNav>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
};

export { Component as MainLayout, Component as MainLayoutComponent };
