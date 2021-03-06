import "./index.css";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Game from "./components/Game";

function Root() {
  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <Game />
    </div>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
