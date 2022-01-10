import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

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
    const textFieldValue = event.target.value;
    this.props.handleChangeFunction(textFieldValue);
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
  handleChangeFunction: PropTypes.func,
  label: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({
  addCountrySearch: (country) => dispatch(addCountrySearch(country)),
});

const Container = connect(mapDispatchToProps)(Component);

export { Container as SearchModule, Component as SearchModuleComponent };
