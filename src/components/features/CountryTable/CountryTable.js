import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { getCountries } from "../../../redux/countriesRedux";
import { connect } from "react-redux";

import styles from "./CountryTable.module.scss";

const Component = ({ countries }) => {
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
  countries: PropTypes.array,
};

const mapStateToProps = (state) => ({
  countries: getCountries(state),
});

const Container = connect(mapStateToProps)(Component);

export { Container as CountryTable, Component as CountryTableComponent };
