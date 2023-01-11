import React from "react";
import classnames from "classnames";
import classNames from "classnames";

import { Link } from "react-router-dom";

const Navbar = ({ visible }) => (
  <nav
    className={classnames("navbar", {
      "navbar--hidden": !visible,
    })}
    style={{ display: "flex", justifyContent: "center", flexDirection: "row" }}
  >
    <Link to="/aboutus" className={classNames(["navbar--item"])}>
      About Us
    </Link>
    <Link to="/form" className={classNames(["navbar--item"])}>
      Form
    </Link>
    <Link to="/Button" className={classNames(["navbar--item"])}>
      Button
    </Link>
  </nav>
);

export default Navbar;
