import React from "react";
import PropTypes from "prop-types";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./Search.module.scss";
import { SearchModule } from "../../features/SearchModule/SearchModule";
import { getCountries } from "../../../redux/countriesRedux";
import {
  addCountrySearch,
  getSearchingCountry,
} from "../../../redux/searchingRedux";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Container from "@mui/material/Container";
import { CountryTable } from "../../features/CountryTable/CountryTable";

const Component = ({
  className,
  searchingCountry,
  children,
  countries,
  addCountrySearch,
}) => {
  const searchingCountries = [];
  // console.log("countries", countries);
  // for (let country of countries) {
  //   const countryObj = { label: country.Country };
  //   searchingCountry.push(countryObj);
  // }
  for (let country of countries) {
    searchingCountries.push(country);
    // return searchingCountry;
  }
  if (searchingCountry.lenght) {
    searchingCountries.filter(
      (country) => country.Country === searchingCountry
    );
  }
  console.log("searchingCountries", searchingCountries);
  console.log("searchingCountry", searchingCountry);

  return (
    <div className={clsx(className, styles.root)}>
      <Container maxWidth="xl">
        <div className={styles.search}>
          <SearchModule
            handleChangeFunction={addCountrySearch}
            label="Countries"
          ></SearchModule>
        </div>
        <div className={styles.boxes}>
          {searchingCountries.map((country) => (
            <Box key={country.id} className={styles.box} sx={{ minWidth: 275 }}>
              <Card variant="outlined">
                <React.Fragment>
                  <CardContent>
                    <Typography>Country</Typography>
                    <Typography className={styles.country}>
                      {country.Country}
                    </Typography>
                    <Typography className={styles.confirmed}>
                      Total Confirmed
                    </Typography>
                    <Typography className={styles.number}>
                      {country.TotalConfirmed}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link
                      to={`/country/${country.Country}`}
                      className={styles.link}
                    >
                      Learn More
                    </Link>
                  </CardActions>
                </React.Fragment>
              </Card>
            </Box>
          ))}
        </div>
      </Container>
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

const ComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export {
  // Component as Homepage,
  ComponentContainer as Search,
  Component as SearchComponent,
};
