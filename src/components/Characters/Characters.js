// import React, { useState, useEffect } from "react";

import "./Characters.css";

const Characters = (props) => {
  // const [fav, setFav] = useState("");

  const handleSaved = (e) => {
    const data = JSON.parse(localStorage.getItem("favItem"));
    // data.push(e);
    localStorage.setItem("favItem", JSON.stringify(e));
    console.log(data);
  };

  return (
    <div>
      <div className="container__cards">
        <div className="cards__body">
          <ul>
            <li>
              <div className="container__content">
                <div className="card__img">
                  <img
                    // src={props.thumb + "/detail.jpg"}
                    src={props.thumb + "/portrait_uncanny.jpg"}
                    alt="Not Found"
                  />
                </div>
                <span className="card__name">{props.name}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Characters;
