import React from "react";
import "../style/lectureCSS.css";

// this file is for instruct other students

export default class Game extends React.Component {
  state = { dice1: null, dice2: null };

  componentDidMount() {
    const rand1 = Math.ceil(Math.random() * 6);
    const rand2 = Math.ceil(Math.random() * 6);
    this.setState({ dice1: `dice${rand1}`, dice2: `dice${rand2}` });
  }

  onRollDiceClick2 = () => {
    const rand1 = Math.ceil(Math.random() * 6);
    const rand2 = Math.ceil(Math.random() * 6);
    this.setState({ dice1: `dice${rand1}`, dice2: `dice${rand2}` });
  };
  render() {
    return (
      <div className="container">
        {/* <button onClick={this.onRollDiceClick2}>roll dice temp</button> */}
        <Player name="Player 1" scoreTotal="200" scoreCurrent="0" classStyle="shaul" />
        <Controller diceA={this.state.dice1} diceB={this.state.dice2} onRollDiceClickProp={this.onRollDiceClick2} />
        <Player name="Player 2" scoreTotal="132" scoreCurrent="0" classStyle="sharona" />
      </div>
    );
  }
}

function Player(props) {
  return (
    // <div className={`player ${props.classTest}`}>
    <div className={`player ${props.classStyle}`}>
      <h1>{props.name}</h1>
      <h2>Total: {props.scoreTotal}</h2>
      <div className="current-score">Current: {props.scoreCurrent}</div>
    </div>
  );
}

function Controller(props) {
  return (
    <div className="controller2">
      <button>New Game</button>
      <div className={`Dice-11 ${props.diceA} `}></div>
      <div className={`Dice-11 ${props.diceB}`}></div>
      <button onClick={props.onRollDiceClickProp}>Roll Dice</button>
      <button>Hold</button>
      <input />
    </div>
  );
}
