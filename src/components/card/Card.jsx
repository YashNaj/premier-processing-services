import React from "react";
import "./card.css";
const Card = ({ title, description, icon }) => {
  return (
    <div className="pps__card">
      <div className="pps__card-container">
        <div className="pps__card-icon ">{icon}</div>
        <h1 className="gradient__text2">{title}</h1>
        <div className=" card-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
