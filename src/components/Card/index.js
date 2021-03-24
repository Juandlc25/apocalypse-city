import "./style.scss";
import React from "react";
import { skills } from "../../utils/constants";
import Skill from "../Skill";
import Detail from "../Detail";

function Card({ id, photo, name, bib, age, gender, time, score }) {
  const [detailsView, setDetailsViews] = React.useState(false);
  const [animation, setAnimation] = React.useState(false);

  return (
    <>
      <div
        className="card"
        onClick={() => {
          setDetailsViews(!detailsView);
          setTimeout(() => {
            setAnimation(!animation);
          }, 300);
        }}
      >
        <div>
          <p>{id}</p>
          <img src={photo} alt={`person ${id}`} />
          <h2>{name}</h2>
        </div>
        <div>
          <p>{bib}</p>
          <p>{age}</p>
          <p>{gender}</p>
          <h3>{time}</h3>
          <h3>{score}</h3>
        </div>
      </div>
      {detailsView && (
        <div className={`details ${!animation && "details-animation"}`}>
          {skills.map((skill) => (
            <Skill
              title={skill.title}
              num={skill.num}
              numColor={skill.numColor}
              done={skill.done}
              doneColor={skill.doneColor}
            />
          ))}
          <Detail title="Post Apocalyptic Highway" />
          <Detail title="Costa Rican Caves" />
        </div>
      )}
    </>
  );
}

export default Card;
