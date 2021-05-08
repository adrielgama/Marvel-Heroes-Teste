import React from "react";

import "./Header.css";
import Logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <div>
      <div className="navbar__header">
        <div className="logo__">
          <img src={Logo} alt="logo Marvel" className="logo__header" />
          <h1>Heroes</h1>
        </div>
        <form action="">
          <input
            type="text"
            placeholder="Search your character"
            className="search__box"
          />
        </form>
      </div>
    </div>
  );
}

export default Header;
