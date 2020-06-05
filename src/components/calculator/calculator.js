import React, { useState } from "react";
import Button from "./../button/button";

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
    if (inputValue.length > 18) {
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
    console.log(inputValue);
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
      <div className="row m-0 w-100">
        <input
          className="mb-2 w-100 d-block bg-dark text-white input"
          type="text"
          placeholder={"0"}
          onKeyDown={(e) => keyDown(e)}
          onChange={() => console.log(inputValue)}
          value={inputValue}
        ></input>
      </div>

      <div className="row m-0">
        <div className="col-9 pr-1">
          <div className="row">
            <div className="col-2 my-2 mx-3 p-0">
              <Button buttonValue="+" onClick={(e) => inputElement(e)}></Button>
            </div>
            <div className="col-2 my-2 mx-3 p-0">
              <Button buttonValue="-" onClick={(e) => inputElement(e)}></Button>
            </div>
            <div className="col-2 my-2 mx-3 p-0">
              <Button buttonValue="*" onClick={(e) => inputElement(e)}>
                x
              </Button>
            </div>
          </div>

          <div className="row">
            <div className="col-2 my-2 mx-3 p-0">
              <Button buttonValue="7" onClick={(e) => inputElement(e)}></Button>
            </div>
            <div className="col-2 my-2 mx-3 p-0">
              <Button buttonValue="8" onClick={(e) => inputElement(e)}></Button>
            </div>
            <div className="col-2 my-2 mx-3 p-0">
              <Button buttonValue="9" onClick={(e) => inputElement(e)}></Button>
            </div>
          </div>

          <div className="row">
            <div className="col-2 my-2 mx-3 p-0">
              <Button buttonValue="4" onClick={(e) => inputElement(e)}></Button>
            </div>
            <div className="col-2 my-2 mx-3 p-0">
              <Button buttonValue="5" onClick={(e) => inputElement(e)}></Button>
            </div>
            <div className="col-2 my-2 mx-3 p-0">
              <Button buttonValue="6" onClick={(e) => inputElement(e)}></Button>
            </div>
          </div>

          <div className="row">
            <div className="col-2 my-2 mx-3 p-0">
              <Button buttonValue="1" onClick={(e) => inputElement(e)}></Button>
            </div>
            <div className="col-2 my-2 mx-3 p-0">
              <Button buttonValue="2" onClick={(e) => inputElement(e)}></Button>
            </div>
            <div className="col-2 my-2 mx-3 p-0">
              <Button buttonValue="3" onClick={(e) => inputElement(e)}></Button>
            </div>
          </div>

          <div className="row">
            <div className="col-2 my-2 mx-3 p-0">
              <Button buttonValue="0" onClick={(e) => inputElement(e)}></Button>
            </div>
            <div className="col-2 my-2 mx-3 p-0">
              <Button buttonValue="." onClick={(e) => inputElement(e)}></Button>
            </div>
            <div className="col-2 my-2 mx-3 p-0">
              <button
                className="button ac-button"
                onClick={(inputValue) => clearInput(inputValue)}
              >
                AC
              </button>
            </div>
          </div>
        </div>

        <div className="col-3 pl-2">
          <div className="my-2">
            <Button buttonValue="/" onClick={(e) => inputElement(e)}></Button>
          </div>
          <div className="my-3">
            <button
              className="button equal-button"
              onClick={() => resolveInput(inputValue)}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;