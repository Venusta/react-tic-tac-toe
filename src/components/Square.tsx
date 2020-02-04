/* eslint-disable react/forbid-prop-types */
import React from "react";
import PropTypes from "prop-types";
import { SquareValue } from "../types";

interface SquareProps {
  onClick(): void;
  value: SquareValue;
}

const Square: React.FC<SquareProps> = ({ onClick, value }) => (
  <button type="button" className="square" onClick={onClick}>
    {value}
  </button>
);

Square.defaultProps = {
  value: null,
};

Square.propTypes = {
  value: PropTypes.any, // fix
  onClick: PropTypes.func.isRequired,
};

export default Square;
