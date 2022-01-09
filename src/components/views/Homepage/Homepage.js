import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./Homepage.module.scss";
import { SearchModule } from "../../features/SearchModule/SearchModule";
import { getCountries } from "../../../redux/countriesRedux";
import {
  addCountrySearch,
  getSearchingCountry,
} from "../../../redux/searchingRedux";

import { connect } from "react-redux";
import { CountryTable } from "../../features/CountryTable/CountryTable";

const Component = ({
  className,
  searchingCountry,
  children,
  countries,
  addCountrySearch,
}) => {
  const countriesForAutocomplete = [];
  console.log("countries", countries);
  for (let country of countries) {
    const countryObj = { label: country.Country };
    countriesForAutocomplete.push(countryObj);
  }
  return (
    <div className={clsx(className, styles.root)}>
      {/* <SearchModule
        autocompleteOptions={countriesForAutocomplete}
        handleChangeFunction={addCountrySearch}
        searchingCountry={searchingCountry}
      ></SearchModule> */}
      <CountryTable></CountryTable>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  countries: PropTypes.array,
  addCountrySearch: PropTypes.func,
  searchingCountry: PropTypes.string,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  countries: getCountries(state),
  searchingCountry: getSearchingCountry(state),
});

const mapDispatchToProps = (dispatch) => ({
  addCountrySearch: (country) => dispatch(addCountrySearch(country)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
