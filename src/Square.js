import React from "react";

function Square(props) {
  return (
    <div className="square" onClick={props.onClick}>
      <span>{props.va}</span>
    </div>
  );

}

export default Square;
