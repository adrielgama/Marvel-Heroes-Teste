// import React, { useState, useEffect } from "react";

import "./Characters.css";

const Characters = (props) => {
  return (
    <div>
      <div className="container__cards">
        <div className="cards__body">
          <ul>
            <li>
              Nome: {props.name}
              ID: {props.id}
              Descrição: {props.description}
              Imagem: {props.thumb}
            </li>
          </ul>
          {/* <ul>
            <li>Card 2</li>
          </ul>
          <ul>
            <li>Card 3</li>
          </ul>
          <ul>
            <li>Card 4</li>
          </ul>
          <ul>
            <li>Card 5</li>
          </ul>
          <ul>
            <li>Card 6</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Characters;
