import React from "react";
import "./style.scss";
import Circle from "../Circle";

function Item({ id, title, califications, time, num }) {
  return (
    <div className="item">
      <div>
        <span>{id}</span>
        <h4>{title}</h4>
      </div>
      <div>
        {califications.map((calification) => (
          <Circle calification={calification} />
        ))}
        <p className="item__time">{time}</p>
        <p className="item__num">{num}</p>
      </div>
    </div>
  );
}

export default Item;
