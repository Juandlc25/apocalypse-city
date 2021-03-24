import React from "react";
import "./style.scss";
import Item from "../Item";
import { costaRicanCaves, postApocalyptic } from "../../utils/constants";

function Detail({ title }) {
  return (
    <div className="detail">
      <h2 className="detail__title">{title}</h2>
      {title === "Post Apocalyptic Highway" ? (
        <>
          {postApocalyptic.map((item) => (
            <Item
              id={item.id}
              title={item.title}
              califications={item.califications}
              time={item.time}
              num={item.num}
            />
          ))}
        </>
      ) : (
        <>
          {costaRicanCaves.map((item) => (
            <Item
              id={item.id}
              title={item.title}
              califications={item.califications}
              time={item.time}
              num={item.num}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default Detail;
