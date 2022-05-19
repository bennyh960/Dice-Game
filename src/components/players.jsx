import React from "react";

const Players = (props) => {
  return (
    <div className={`player ${props.playerNum}`}>
      <div className="playerTurnContainer">
        <h1>Player {props.pIdx}</h1>
        <div className={props.turnClass}></div>
      </div>
      <div className="score1">{props.scoreTotal}</div>
      <div className="current">{props.currentScore}</div>
    </div>
  );
};

export default Players;
