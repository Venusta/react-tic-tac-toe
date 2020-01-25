/* eslint-disable react/prop-types */
import React, { Component } from "react";
import PropTypes from "prop-types";
import Square from "./Square";

class Board extends Component {
  renderSquare(i) {
    const { squares, onClick } = this.props;
    return (
      <Square
        key={`square${i}`}
        value={squares[i]}
        onClick={() => onClick(i)}
      />
    );
  }

  renderGrid() {
    const { boardSize: { x, y } } = this.props;
    const grid = [];

    for (let row = 0; row < y; row += 1) {
      const rowOfCells = [];

      for (let column = 0; column < x; column += 1) {
        rowOfCells.push(this.renderSquare(row * x + column)); // index
      }
      grid.push(<div key={`row${row}`} className="board-row">{rowOfCells}</div>);
    }
    return grid;
  }

  render() {
    return (
      <div>
        {this.renderGrid()}
      </div>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
