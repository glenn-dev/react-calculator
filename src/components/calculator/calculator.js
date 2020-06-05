import React, { useState } from "react";
import Button from "./../button/button";
import Row from "react-bootstrap/Row";

const Calculator = (props) => {
  /* HOOKS */
  const [inputValue, setInputValue] = useState(props.initialValue);
  const [flag, setFlag] = useState(false);

  /* CONST */
  const operators = ["/*-+.", "/*+"];

  /* FUNCTIONS */
  const throwAlert = () => alert("Please enter a valid operator.");

  /* Set new element into input value */
  const setValue = (elem) => {
    let newValue = inputValue + elem;
    setInputValue(newValue);
  };

  /* Evaluate and set input elements */
  const inputElement = (elem) => {
    if (inputValue.length > 14) {
      alert("The value is too large.");
      clearInput();
    } else if (inputValue === "" || inputValue === "0") {
      !operators[1].includes(elem) ? setInputValue(elem) : throwAlert();
    } else if (flag) {
      setValue(elem);
      setFlag(false);
    } else {
      !operators[0].includes(inputValue.substr(-1)) || !isNaN(elem)
        ? setValue(elem)
        : throwAlert();
    }
  };

  /* Evaluate keyboard input elements */
  const keyDown = (key) => {
    const keyValue = key.key;
    const keyCode = key.keyCode;
    if (keyCode === 13) {
      resolveInput(inputValue);
    } else if (keyCode === 8) {
      const newValue = inputValue.slice(0, -1);
      setInputValue(newValue);
    } else if (keyCode === 46) {
      clearInput();
    } else {
      !isNaN(keyValue) || operators[0].includes(keyValue)
        ? inputElement(keyValue)
        : throwAlert();
    }
  };

  /* Check if input content is a valid math expression and resolve it. */
  const resolveInput = (inputValue) => {
    if (!operators[0].includes(inputValue.substr(-1))) {
      const result = eval(inputValue);
      setInputValue(Number(result).toLocaleString());
      setFlag(true);
    } else {
      throwAlert();
    }
  };

  /* Clear input value */
  const clearInput = () => {
    setInputValue("");
  };

  /* MAGIC */
  return (
    <div className="calculator mx-auto">
      <Row className="m-0 w-100">
        <input
          className="mb-2 w-100 d-block bg-dark text-white input"
          type="text"
          placeholder={"0"}
          onKeyDown={(e) => keyDown(e)}
          onChange={() => console.log(inputValue)}
          value={inputValue}
        ></input>
      </Row>

      <Row className="m-0">
        <div className="col-9 pr-1">
          <Row>
            <Button divClass="col-2 my-2 mx-3 p-0" buttonClass="button" buttonValue="+" onClick={(e) => inputElement(e)}></Button>
            <Button divClass="col-2 my-2 mx-3 p-0" buttonClass="button" buttonValue="-" onClick={(e) => inputElement(e)}></Button>
            <Button divClass="col-2 my-2 mx-3 p-0" buttonClass="button" buttonValue="*" onClick={(e) => inputElement(e)}></Button>
          </Row>

          <Row>
            <Button divClass="col-2 my-2 mx-3 p-0" buttonClass="button" buttonValue="7" onClick={(e) => inputElement(e)}></Button>
            <Button divClass="col-2 my-2 mx-3 p-0" buttonClass="button" buttonValue="8" onClick={(e) => inputElement(e)}></Button>
            <Button divClass="col-2 my-2 mx-3 p-0" buttonClass="button" buttonValue="9" onClick={(e) => inputElement(e)}></Button>
          </Row>

          <Row>
            <Button divClass="col-2 my-2 mx-3 p-0" buttonClass="button" buttonValue="4" onClick={(e) => inputElement(e)}></Button>
            <Button divClass="col-2 my-2 mx-3 p-0" buttonClass="button" buttonValue="5" onClick={(e) => inputElement(e)}></Button>
            <Button divClass="col-2 my-2 mx-3 p-0" buttonClass="button" buttonValue="6" onClick={(e) => inputElement(e)}></Button>
          </Row>

          <Row>
            <Button divClass="col-2 my-2 mx-3 p-0" buttonClass="button" buttonValue="1" onClick={(e) => inputElement(e)}></Button>
            <Button divClass="col-2 my-2 mx-3 p-0" buttonClass="button" buttonValue="2" onClick={(e) => inputElement(e)}></Button>
            <Button divClass="col-2 my-2 mx-3 p-0" buttonClass="button" buttonValue="3" onClick={(e) => inputElement(e)}></Button>
          </Row>

          <Row>
            <Button divClass="col-2 my-2 mx-3 p-0" buttonClass="button" buttonValue="0" onClick={(e) => inputElement(e)}></Button>
            <Button divClass="col-2 my-2 mx-3 p-0" buttonClass="button" buttonValue="." onClick={(e) => inputElement(e)}></Button>
            <Button divClass="col-2 my-2 mx-3 p-0" buttonClass="button ac-button" buttonValue="AC" onClick={(inputValue) => clearInput(inputValue)}></Button>
          </Row>
        </div>

        <div className="col-3 pl-2">
          <Button divClass="my-2" buttonClass="button" buttonValue="/" onClick={(e) => inputElement(e)}></Button>
          <div className="my-3">
            <button
              className="button equal-button"
              onClick={() => resolveInput(inputValue)}
            >
              =
            </button>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Calculator;