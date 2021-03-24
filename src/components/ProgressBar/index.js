import React, { useEffect, useState } from "react";
import "./style.scss";

function ProgressBar({ done, doneColor }) {
  const [style, setStyle] = useState({});
  useEffect(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
      background: doneColor,
    };
    setStyle(newStyle);
  }, [done]);
  return (
    <div className="progress">
      <div style={style}></div>
    </div>
  );
}

export default ProgressBar;
