import React, { useState } from "react";
import shortid from "shortid";
import Board from "./Board";
import calculateWinner from "../utils/calculateWinner";

const Game: React.FC = () => {
  const boardSize = { x: 3, y: 3 };
  const boardArea = boardSize.x * boardSize.y;

  const [history, setHistory] = useState([{
    squares: Array(boardArea).fill(null),
    moveLoc: { x: null, y: null },
  }]);

  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const columnRowFromIndex = (i: number) => {
    const { x } = boardSize;
    const row = Math.floor(i / x) + 1;
    const column = (i % x) + 1;
    return { x: column, y: row };
  };

  const handleClick = (i: number) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const squares = current.squares.slice();

    const moveLoc = columnRowFromIndex(i);

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";

    setHistory(newHistory.concat([{
      squares,
      moveLoc,
    }]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move
      ? `Go to move #${move} x: ${history[move].moveLoc.x} y: ${history[move].moveLoc.y}`
      : "Go to game start";
    const id = shortid.generate();
    return (
      <li key={id}>
        <button type="button" onClick={() => jumpTo(move)}>{desc}</button>
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
          onClick={(i: number) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
