import React, { Component } from "react";
import Board from "./Board";
import calculateWinner from "../utils/calculateWinner";

class Game extends Component {
  constructor(props) {
    super(props);
    const boardSize = { x: 3, y: 3 };
    const boardArea = boardSize.x * boardSize.y;
    this.state = {
      boardSize,
      history: [{
        squares: Array(boardArea).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  columnRowFromIndex(i) {
    const { boardSize: { x } } = this.state;
    const row = Math.floor(i / x) + 1;
    const column = (i % x) + 1;
    return { x: column, y: row };
  }

  handleClick(i) {
    const {
      history: historyState, stepNumber, xIsNext,
    } = this.state;

    const history = historyState.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    const moveLoc = this.columnRowFromIndex(i);

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{
        squares,
        moveLoc,
      }]),
      stepNumber: history.length,
      xIsNext: !xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const {
      history: historyState, stepNumber, xIsNext, boardSize,
    } = this.state;
    const history = historyState;
    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move
        ? `Go to move #${move} x: ${history[move].moveLoc.x} y: ${history[move].moveLoc.y}`
        : "Go to game start";
      return (
        // eslint-disable-next-line react/no-array-index-key
        <li key={move}>
          <button type="button" onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${xIsNext ? "X" : "O"}`;
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            boardSize={boardSize}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
