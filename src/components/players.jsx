import React from "react";

const Players = (props) => {
  <h1>Player {props.pIdx}</h1> ? !props.isWinner : <h1>WINNER!</h1>;
  // const showName = <h1>Player {props.pIdx}</h1> ? !props.isWinner : <h1>WINNER!</h1>;

  return (
    <div className={`player ${props.playerNum}`}>
      <div className="playerTurnContainer">
        {!props.isWinner && <h1>Player {props.pIdx}</h1>}
        {props.isWinner && <h1>WINNER!</h1>}
        <div className={props.turnClass}></div>
      </div>
      <div className="score1">{props.scoreTotal}</div>
      <div className="current">{props.currentScore}</div>
    </div>
  );
};

export default Players;
