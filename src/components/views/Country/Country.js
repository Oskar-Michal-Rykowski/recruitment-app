import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import { connect } from "react-redux";

import styles from "./Country.module.scss";
import { getCountries } from "../../../redux/countriesRedux";

const Component = ({ countries }) => {
  const url = window.location.href;
  const stuff = url.split("/");
  const countryName = stuff[stuff.length - 1];
  const countryData = countries.filter(
    (country) => country.Country === countryName
  )[0];

  return (
    <div className={styles.root}>
      <Container>
        <Card>
          <CardActionArea>
            <CardMedia
              className={styles.photo}
              component="img"
              image={
                "https://images.pexels.com/photos/3183171/pexels-photo-3183171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
              alt="green iguana"
            />
            <CardContent className={styles.content}>
              <Typography gutterBottom variant="h5" component="div">
                {countryData.Country}
              </Typography>
              <div className={styles.data}>
                <div className={styles.box}>
                  <Typography variant="h6" gutterBottom component="div">
                    Total Confirmed
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom component="div">
                    {countryData.TotalConfirmed}
                  </Typography>
                </div>
                <div className={styles.box}>
                  <Typography variant="h6" gutterBottom component="div">
                    Total Deaths
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom component="div">
                    {countryData.TotalDeaths}
                  </Typography>
                </div>
                <div className={styles.box}>
                  <Typography variant="h6" gutterBottom component="div">
                    Total Recovered
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom component="div">
                    {countryData.TotalRecovered}
                  </Typography>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </div>
  );
};

Component.propTypes = {
  countries: PropTypes.array,
};

const mapStateToProps = (state) => ({
  countries: getCountries(state),
});

const CountryContainer = connect(mapStateToProps)(Component);

export { CountryContainer as Country, Component as CountryComponent };
