// import "./styleDraft.css";
import "../style/styleDraft.css";
import Players from "./players";
import Controller from "./controller";
import React from "react";

export default class Draft extends React.Component {
  constructor(props) {
    super(props);
    this.randA = Math.ceil(Math.random() * 6);
    this.randB = Math.ceil(Math.random() * 6);
    this.currentA = 0;
    this.currentB = 0;
    // this.maxPoints = 100;
    this.turn = 1; //player1 true , player 2 false.
    // this.isP1Win = false;
    // this.isP2Win = false;
    this.state = {
      diceA: `dice${this.randA}`,
      diceB: `dice${this.randB}`,
      whosTurnNow: "p1",
      playerOneTurnSymbol: "turn-symbol",
      playerTwoTurnSymbol: "",
      scorePlayer1: null,
      scorePlayer2: null,
      isP1Win: false,
      isP2Win: false,
      maxPoints: 100,
    };
  }
  componentDidMount = () => {
    console.log("componentDidMount");
    this.setState({ diceA: `dice${this.randA}`, diceB: `dice${this.randB}` });
  };
  componentDidUpdate = () => {
    console.log("componentDidUpdate");
    this.randA = Math.ceil(Math.random() * 6);
    this.randB = Math.ceil(Math.random() * 6);
    // this.state.isP1Win || (this.state.isP2Win && this.isWinner());
    // this.onNewGameClick();
  };

  onRollDiceClick = (diceA, diceB) => {
    // console.log(this.state.whosTurnNow);
    if (this.state.whosTurnNow === "p1") {
      this.currentA += this.randA + this.randB;
    } else {
      this.currentB += this.randA + this.randB;
    }

    // if (this.randA === 6 && this.randB === 6) {
    if (diceA === 6 && diceB === 6) {
      // todo add animation to note user his lost is current score
      this.currentA = 0;
      this.currentB = 0;
      const tempActivePlayer = "p1" ? this.state.whosTurnNow === "p1" : "p2";
      // const newActivePlayer = "p1" ? tempActivePlayer !== "p1" : "p2";
      // this.setState({ whosTurnNow: newActivePlayer });
      this.changeTurnByClickOnHold(tempActivePlayer);
    }

    // console.log(x, y);
    // this.setState({ diceA: `dice${this.randA}`, diceB: `dice${this.randB}` });
    this.setState({ diceA: `dice${diceA}`, diceB: `dice${diceB}` });
  };

  changeTurnByClickOnHold = (whosTurn) => {
    console.log(whosTurn);
    this.setState({ whosTurnNow: whosTurn });
    if (this.state.whosTurnNow === "p1") {
      // this.totalScoreA += this.currentA;
      this.setState({
        playerOneTurnSymbol: "",
        playerTwoTurnSymbol: "turn-symbol",
        scorePlayer1: this.state.scorePlayer1 + this.currentA,
        isP1Win: true ? this.state.scorePlayer1 + this.currentA > this.state.maxPoints : false,
      });

      this.currentA = 0;
    } else {
      this.setState({
        playerOneTurnSymbol: "turn-symbol",
        playerTwoTurnSymbol: "",
        scorePlayer2: this.state.scorePlayer2 + this.currentB,
        isP2Win: true ? this.state.scorePlayer2 + this.currentB > this.state.maxPoints : false,
      });
      this.currentB = 0;
    }

    (this.state.isP1Win || this.state.isP2Win) && this.onNewGameClick();
  };

  onNewGameClick = () => {
    console.log("new-Game-Btn");
    this.currentA = 0;
    this.currentB = 0;
    this.setState({
      playerOneTurnSymbol: "turn-symbol",
      playerTwoTurnSymbol: "",
      scorePlayer1: null,
      scorePlayer2: null,
      diceA: `dice${this.randA}`,
      diceB: `dice${this.randB}`,
    });
  };

  onInputChange = (newMax) => {
    this.setState({ maxPoints: newMax });
  };

  isWinner = () => {
    console.log("winner");

    // this.onNewGameClick();
  };
  render() {
    return (
      <div className="container">
        <Controller
          callOnRollDiceClick={this.onRollDiceClick}
          callOnHoldClick={this.changeTurnByClickOnHold}
          CallonNewGameClicked={this.onNewGameClick}
          onInputMaxPts={this.onInputChange}
          diceA={this.state.diceA}
          diceB={this.state.diceB}
        />
        <Players
          playerNum="p1"
          pIdx={1}
          turnClass={this.state.playerOneTurnSymbol}
          scoreTotal={this.state.scorePlayer1}
          // scoreTotal={this.totalScoreA}
          currentScore={this.currentA}
          isWinner={this.state.isP1Win}
        />
        <Players
          playerNum="p2"
          pIdx={2}
          turnClass={this.state.playerTwoTurnSymbol}
          scoreTotal={this.state.scorePlayer2}
          // scoreTotal={this.totalScoreB}
          currentScore={this.currentB}
          isWinner={this.state.isP2Win}
        />
      </div>
    );
  }
}
