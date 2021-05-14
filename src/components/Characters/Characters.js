import React, { useEffect } from "react";
import moment from "moment";
import { IoMdCloseCircle, IoMdStar } from "react-icons/io";

import "./Characters.css";

const Characters = (props) => {
  // const [select, setSelect] = useState(0);

  // const handleSaved = (e) => {
  //   const data = JSON.parse(localStorage.getItem("favItem"));
  //   // data.push(e);
  //   localStorage.setItem("favItem", JSON.stringify(e));
  //   // console.log(data);
  // };

  useEffect(() => {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var close = document.getElementById("btnClose");

    btn.onclick = function () {
      modal.style.display = "block";
    };

    close.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };
  }, []);

  // console.log(select);

  return (
    <div>
      <div className="modal__cards" id="myModal">
        <div className="modal__content">
          <div className="modal__header">
            <span id="btnClose">
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
                {props.description ? null : <p> Description not found </p>}{" "}
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
              Last modified {moment(props.date).format("DD/MM/YYYY - HH:mm:ss")}
            </p>
          </div>
        </div>
      </div>
      <div className="container__cards">
        <div className="cards__body">
          <ul>
            <li>
              <div className="container__content" id="myBtn">
                <div className="card__img">
                  <img
                    // src={props.thumb + "/detail.jpg"}
                    src={props.thumb + "/portrait_uncanny.jpg"}
                    alt="Not Found"
                  />
                  {/* <div className="hover__card__content">
                    <h1>{props.name}</h1>
                    <h3> {props.description} </h3>
                    
                  </div> */}
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
