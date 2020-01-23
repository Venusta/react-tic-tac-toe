/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import TitleComponent from "./components/TitleComponent";

function Root() {
  return (
    <h1>Hello, world.</h1> ,
    <TitleComponent />
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
