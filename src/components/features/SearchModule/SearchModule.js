import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Icon from "@mui/material/Icon";

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from "./SearchModule.module.scss";
import { connect } from "react-redux";
import { addCountrySearch } from "../../../redux/searchingRedux";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: [],
    };
  }

  onChangeFunction = (event) => {
    this.props.handleChangeFunction(event.target.value);
  };

  render() {
    const { label } = this.props;
    return (
      <TextField
        className={styles.text}
        onChange={(e) => this.onChangeFunction(e)}
        id="outlined-basic"
        label={label}
        variant="outlined"
      />
    );
  }
}

Component.propTypes = {
  autocompleteOptions: PropTypes.array,
  handleChangeFunction: PropTypes.func,
  searchingElement: PropTypes.string,
  label: PropTypes.string,
  // addCountrySearch: PropTypes.func,
};

const mapStateToProps = (state) => ({
  // someProp: reduxSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  addCountrySearch: (country) => dispatch(addCountrySearch(country)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as SearchModule,
  Container as SearchModule,
  Component as SearchModuleComponent,
};
