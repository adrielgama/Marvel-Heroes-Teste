import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
// import { HiStar } from "react-icons/hi";

// import "./Header.css";
import Logo from "../../assets/images/logo.svg";
import Characters from "../Characters/Characters";
import SearchInput from "../Search/Search";

const Header = () => {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function onSearch() {
      if (search === "") {
        if (
          localStorage.getItem("fav") === "[]" ||
          !localStorage.getItem("fav")
        ) {
          // localStorage.setItem("favItem", "[]");
          // const response =
          await api
            .get("/characters")
            .then((response) => {
              setResults(response.data.data.results);
            })
            .catch((err) => console.log(err));
        } else {
          const favor = JSON.parse(localStorage.getItem("favItem"));
          setResults(favor);
        }
      } else {
        await api
          .get(`/characters?nameStartsWith=${search}`)
          .then((response) => {
            setResults(response.data.data.results);
          })
          .catch((err) => console.log(err));
      }
    }
    onSearch();
  }, [search]);

  console.log(results);

  return (
    <div className="container__home">
      <div className="navbar__header">
        <Link to="/">
          <div className="logo__">
            <img src={Logo} alt="logo Marvel" className="logo__header" />
            <h1>Heroes</h1>
          </div>
        </Link>
        <SearchInput searched={(q) => setSearch(q)}></SearchInput>
        {/* <Link to="/favorites">
          <div className="favorites">
            <h3>Favorites</h3>
            <HiStar className="fav__star__header" />
          </div>
        </Link> */}
      </div>
      <div className="title__body">
        <h1>Characters</h1>
      </div>
      <div className="container__characters">
        {results.map((data, index) => {
          return (
            <Characters
              key={index}
              updateData={setResults}
              id={data.id}
              name={data.name}
              description={data.description}
              thumb={data.thumbnail.path}
              date={data.modified}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Header;
