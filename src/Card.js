import React from "react";
import "./Card.css";
import { Avatar } from "@material-ui/core";

function Card({ avatar, title, caption, text }) {
  return (
    <div className="card">
      <Avatar className="card__avatar" src={avatar} />
      <div className="card__info">
        <h3>{title}</h3>
        <p>{caption}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;
