import React from "react";

import styles from "./Homepage.module.scss";
import { CountryTable } from "../../features/CountryTable/CountryTable";

const Component = () => (
  <div className={styles.root}>
    <CountryTable></CountryTable>
  </div>
);

export { Component as Homepage, Component as HomepageComponent };
