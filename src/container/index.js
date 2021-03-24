import React from "react";
import { cards } from "../utils/constants";
import Card from "../components/Card";
import HeaderTable from "../components/HeaderTable";
import "./style.scss";

function Container() {
  return (
    <div className="container">
      <HeaderTable />
      {cards.map((card, idx) => (
        <Card
          key={idx}
          id={idx + 1}
          photo={card.photo}
          name={card.name}
          bib={card.bib}
          age={card.age}
          gender={card.gender}
          time={card.time}
          score={card.score}
        />
      ))}
    </div>
  );
}

export default Container;
