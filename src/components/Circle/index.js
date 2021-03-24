import React from "react";
import "./style.scss";

function Circle({ calification }) {
  return (
    <p className={`circle ${calification === "" && "active"}`}>
      {calification}
    </p>
  );
}

export default Circle;
