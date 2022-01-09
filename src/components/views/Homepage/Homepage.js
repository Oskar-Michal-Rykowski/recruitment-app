import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./Homepage.module.scss";
import { SearchModule } from "../../features/SearchModule/SearchModule";
import { getCountries } from "../../../redux/countriesRedux";
import { connect } from "react-redux";

const Component = ({ className, children, countries }) => {
  const countriesForAutocomplete = [];
  for (let country of countries) {
    const countryObj = { label: country.Country };
    countriesForAutocomplete.push(countryObj);
  }
  return (
    <div className={clsx(className, styles.root)}>
      <SearchModule
        autocompleteOptions={countriesForAutocomplete}
      ></SearchModule>
      {children}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  countries: PropTypes.array,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  countries: getCountries(state),
});

const mapDispatchToProps = (dispatch) => ({
  // someAction: arg => dispatch(reduxActionCreator(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
