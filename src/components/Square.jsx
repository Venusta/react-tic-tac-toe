import React from "react";
import PropTypes from "prop-types";

function Square({ onClick, value }) {
  return (
    <button type="button" className="square" onClick={onClick}>
      {value}
    </button>
  );
}

Square.defaultProps = {
  value: null,
};

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Square;
