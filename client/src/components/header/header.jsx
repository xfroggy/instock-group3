import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/header.scss";
import logo from "../../assets/logo/InStock-Logo.svg";
function header() {
  return (
    <div className="header">
      <div className="header__box">
        <div className="header__logo">
          <NavLink to="/">
            <img src={logo} alt="Website Logo" className="header__logoImg" />
          </NavLink>
          <div className="header__nav">
            <NavLink
              to="/warehouses"
              className="header__warehouse"
              activeClassName="header__warehouse--active"
            >
              <h4 className="header__margin">Warehouses</h4>{" "}
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
    </div>
  );
}

export default header;
