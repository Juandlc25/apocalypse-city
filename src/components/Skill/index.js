import React from "react";
import "./style.scss";
import ProgressBar from "../ProgressBar";

function Skill({ title, num, numColor, done, doneColor }) {
  return (
    <div className="skill">
      <div className="skill__div">
        <p>{title}</p>
        <span style={{ color: numColor }}>{num}</span>
      </div>

      <ProgressBar done={done} doneColor={doneColor} />
    </div>
  );
}

export default Skill;
