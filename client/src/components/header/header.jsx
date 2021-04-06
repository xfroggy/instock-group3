import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/header.css";
import logo from "../../assets/Logo/InStock-Logo.svg";
function header() {
  return (
    <div className="header">
      <div className="header__logo">
        <NavLink to="/">
          <img src={logo} alt="Website Logo" />
        </NavLink>
        <div className="header__nav">
          <NavLink
            to="/warehouses"
            className="header__warehouse"
            activeClassName="header__warehouse--active"
          >
            <h4>Warehouses</h4>{" "}
          </NavLink>
          <NavLink
            to="/inventory"
            className="header__inventory"
            activeClassName="header__inventory--active"
          >
            <h4>Inventory</h4>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default header;
