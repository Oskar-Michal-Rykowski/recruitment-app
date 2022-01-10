import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Container from "@mui/material/Container";

import styles from "./Search.module.scss";
import { SearchModule } from "../../features/SearchModule/SearchModule";
import { getCountries } from "../../../redux/countriesRedux";
import {
  addCountrySearch,
  getSearchingCountry,
} from "../../../redux/searchingRedux";

const Component = ({ searchingCountry, countries, addCountrySearch }) => {
  let searchingCountries = [];
  if (searchingCountry.length) {
    console.log("Works");
    searchingCountries = countries.filter(
      (country) => country.Country === searchingCountry
    );
  } else {
    for (let country of countries) {
      searchingCountries.push(country);
    }
  }

  return (
    <div className={styles.root}>
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
  countries: PropTypes.array,
  addCountrySearch: PropTypes.func,
  searchingCountry: PropTypes.string,
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

export { ComponentContainer as Search, Component as SearchComponent };
