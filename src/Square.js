import React from "react";

function Square(props) {
  return (
    <div className="square" onClick={props.onClick}>
      <span>{props.value}</span>
    </div>
  );

}

export default Square;
