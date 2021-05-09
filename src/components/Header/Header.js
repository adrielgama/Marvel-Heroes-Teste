import React, { useState, useEffect } from "react";
import api from "../../services/api";

import "./Header.css";
import Logo from "../../assets/images/logo.svg";

const Header = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    api
      .get("/characters")
      .then((response) => {
        setResults(response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(results);

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
};

export default Header;
