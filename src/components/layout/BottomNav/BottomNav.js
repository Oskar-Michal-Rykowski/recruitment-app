import React from "react";
import { Link } from "react-router-dom";

import styles from "./BottomNav.module.scss";

const Component = () => (
  <div className={styles.root}>
    <Link to="/">Created by Oskar Rykowski</Link>
  </div>
);

export { Component as BottomNav, Component as BottomNavComponent };
