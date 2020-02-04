import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";
import { SquareValue } from "../types";

interface BoardProps {
  onClick(i: number): void;
  squares: SquareValue[];
  boardSize: {x: number; y: number };
}

const Board: React.FC<BoardProps> = ({ squares, onClick, boardSize: { x, y } }) => {
  const renderSquare = (i: number) => (
    <Square
      key={`square${i}`}
      value={squares[i]}
      onClick={() => onClick(i)}
    />
  );

  const renderGrid = () => {
    const grid = [];

    for (let row = 0; row < y; row += 1) {
      const rowOfCells = [];

      for (let column = 0; column < x; column += 1) {
        rowOfCells.push(renderSquare(row * x + column)); // index
      }
      grid.push(<div key={`row${row}`} className="board-row">{rowOfCells}</div>);
    }
    return grid;
  };

  return (
    <div>
      {renderGrid()}
    </div>
  );
};

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.any).isRequired, // fix
  onClick: PropTypes.func.isRequired,
  boardSize: PropTypes.exact({ x: PropTypes.number, y: PropTypes.number }).isRequired,
};

export default Board;
