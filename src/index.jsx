import React from "react";
import ReactDOM from "react-dom";
import TestComponent from "./components/TestComponent";

function Root() {
  return (
    <div>
      <h1>Hello, world.</h1>
      <TestComponent />
      <TestComponent />
    </div>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
