import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Component = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.header}>
      <Link className={styles.brand} to="/">
        Covid Data App
      </Link>
      <div className={styles.menu}>
        <Button
          className={styles.button}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Menu
        </Button>
        <Menu
          className={styles.link}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem className={styles.link} onClick={handleClose}>
            <Link to="/">Coutry Table</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to="/search">Coutry Search</Link>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export { Component as Header, Component as HeaderComponent };
