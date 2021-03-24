import React from "react";
import "./style.scss";
import title from "../../background/title.png";

function HeaderTable() {
  return (
    <div className="headerTable">
      <img src={title} alt="title" />
      <div className="subtitles">
        <p>BIB</p>
        <p>AGE</p>
        <p>GENDER</p>
        <p>TIME</p>
        <p>SCORE</p>
      </div>
    </div>
  );
}

export default HeaderTable;
