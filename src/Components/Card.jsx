import React from "react";
import u1 from "../u1.png";
import "./Card.css";
function Card({ data }) {
  return (
    <>
      <div className="Card1" key={data["id"]}>
        <div className="head">
          <div className="id">{data["id"]}</div>
          <div className="img">
            <img src={u1} alt="user" />
          </div>
        </div>
        <div className="title">{data["title"]}</div>
        <div className="feature">
          <div className="icon">
            <img src={u1} alt="user" className="logo" />
          </div>
          <div className="featuretext">{data["tag"]}</div>
        </div>
      </div>
    </>
  );
}

export default Card;
