import React from "react";
import Board from "./component/Board";

import "./App.css";

class Game extends React.Component {
  render() {
    return (
      <div className="container game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
