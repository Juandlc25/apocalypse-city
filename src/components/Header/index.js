import React from "react";
import "./style.scss";

function Header() {
  return (
    <>
      <header className="header">
        <p>TEAMS</p>
        <p className="active">LEADERBOARD</p>
      </header>
      <div className="header__blue"></div>
    </>
  );
}

export default Header;
