import React from "react";

const Button = (props) => {
  return (
    <button className="button" onClick={() => props.onClick(props.buttonValue)}>
      {props.buttonValue}
    </button>
  );
};

export default Button;