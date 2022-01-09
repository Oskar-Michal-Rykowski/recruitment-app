import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./CountryTable.module.scss";
import { DataGrid } from "@mui/x-data-grid";
import { getCountries } from "../../../redux/countriesRedux";
import {
  addCountrySearch,
  getSearchingCountry,
} from "../../../redux/searchingRedux";

import { connect } from "react-redux";

const Component = ({
  className,
  searchingCountry,
  children,
  countries,
  addCountrySearch,
}) => {
  const columns = [
    { field: "Country", headerName: "Country", width: 130 },
    {
      field: "TotalConfirmed",
      headerName: "Total Confirmed",
      type: "number",
      width: 200,
    },
    {
      field: "TotalDeaths",
      headerName: "Total Deaths",
      type: "number",
      width: 230,
    },
    {
      field: "TotalRecovered",
      headerName: "Total Recovered",
      type: "number",
      width: 230,
    },
  ];

  // const rows = [
  //   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  //   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  // ];

  return (
    <div className={styles.root}>
      <DataGrid
        rows={countries}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
      />
      <Typography className={styles.instruction} variant="body2" gutterBottom>
        You can filter the table by clicking on icons next to a column name. The
        icons will appear when you hover over them.
      </Typography>
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
  Container as CountryTable,
  Component as CountryTableComponent,
};
