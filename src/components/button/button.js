import React from "react";

const Button = (props) => {
  return (
    <div className={props.divClass}>
      <button className={props.buttonClass} onClick={() => props.onClick(props.buttonValue)}>
        {props.buttonValue}
      </button>
    </div>
  );
};

export default Button;