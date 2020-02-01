import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";

const Board = ({ squares, onClick, boardSize: { x, y } }) => {
  const renderSquare = (i) => (
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
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  boardSize: PropTypes.objectOf(PropTypes.number, PropTypes.number).isRequired,
};

export default Board;
