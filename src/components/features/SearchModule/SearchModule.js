import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import clsx from "clsx";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./SearchModule.module.scss";

const Component = ({ className, children, autocompleteOptions }) => {
  console.log("autocompleteOptions", autocompleteOptions);
  return (
    <div className={clsx(className, styles.root)}>
      <Autocomplete
        className={styles.autocomplete}
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Countries" />}
      />
    </div>
  );
};

const top100Films = [
  {
    label: "Afghanistan",
  },
  {
    label: "Albania",
  },
  {
    label: "Algeria",
  },
];

Component.propTypes = {
  children: PropTypes.node,
  autocompleteOptions: PropTypes.array,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as SearchModule,
  // Container as Header,
  Component as SearchModuleComponent,
};
