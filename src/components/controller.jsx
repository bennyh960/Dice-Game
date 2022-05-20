import React from "react";

export default class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nowPlay: "p2" };
  }
  onRollDiceClick = (randA, randB) => {
    this.props.callOnRollDiceClick(randA, randB);
  };
  onHoldClick = () => {
    if (this.state.nowPlay === "p1") {
      this.setState({ nowPlay: "p2" });
    } else {
      this.setState({ nowPlay: "p1" });
    }
    this.props.callOnHoldClick(this.state.nowPlay);
  };

  render() {
    return (
      <div className="controller">
        <NewGameBtn OnNewGameClicked={this.props.CallonNewGameClicked} />
        <div className="dice-container">
          <div className={`img1 ${this.props.diceA}`}></div>
          <div className={`img2 ${this.props.diceB}`}></div>
        </div>
        <RoleDiceBtn clickedRoll={this.onRollDiceClick} />
        <OnHoldBtn clickedHold={this.onHoldClick} />
        <input
          onChange={(e) => {
            this.props.onInputMaxPts(e.target.value);
          }}
        ></input>
      </div>
    );
  }
}

function NewGameBtn(props) {
  return (
    <button onClick={props.OnNewGameClicked}>
      <i className="fa-solid fa-circle-plus"></i> New Game
    </button>
  );
}

function RoleDiceBtn(props) {
  return (
    <button
      onClick={() => {
        const randA = Math.ceil(Math.random() * 6);
        const randB = Math.ceil(Math.random() * 6);
        props.clickedRoll(randA, randB);
      }}
    >
      <i className="fa-solid fa-arrows-spin"></i> Role Dice
    </button>
  );
}

function OnHoldBtn(props) {
  return (
    <button onClick={props.clickedHold}>
      <i className="fa-solid fa-hand-holding-hand"></i> Hold
    </button>
  );
}
