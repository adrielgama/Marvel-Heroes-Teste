import React, { useState, useRef } from "react";
import moment from "moment";
import { IoMdCloseCircle, IoMdStar } from "react-icons/io";

import "./Characters.css";

const Characters = (props) => {
  const [isOpen, setIsOpen] = useState("");
  const modalRef = useRef(null);

  const dropOpen = () => {
    console.log("show");
    setIsOpen("show");
    document.body.addEventListener("click", closeDrop);
  };

  const className = isOpen;

  const closeDrop = (event) => {
    event.stopPropagation();

    const contain = modalRef.current.contains(event.target);
    console.log(event.target); //tratar event.target para modal não fechar no clique

    if (contain) {
      console.log("hidden");
      setIsOpen("");
      document.body.removeEventListener("click", closeDrop);
    }
  };

  return (
    <div>
      {/* MODAL HIDDEN  */}
      <div ref={modalRef} className={`${className} modal`}>
        <div className="modal__cards" id="myModal">
          <div className="modal__content">
            <div className="modal__header">
              <span>
                <IoMdCloseCircle />
              </span>
              <h2> {props.name} </h2>
            </div>
            <div className="modal__body">
              <div className="modal__full__image">
                <img src={props.thumb + "/detail.jpg"} alt="Not Found" />
              </div>
              <div className="modal__desc">
                <p className="modal_desc-desc">
                  {" "}
                  {props.description}
                  {props.description ? null : (
                    <p> Description not found </p>
                  )}{" "}
                </p>
                <button>
                  <p>Add favorites</p>
                  <span>
                    <IoMdStar />
                  </span>
                </button>
              </div>
            </div>
            <div className="modal__date">
              <p>
                Last modified{" "}
                {moment(props.date).format("DD/MM/YYYY - HH:mm:ss")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTAINER CARDS  */}
      <div className="container__cards">
        <div className="cards__body">
          <ul>
            <li>
              <div className="container__content" onClick={dropOpen}>
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
