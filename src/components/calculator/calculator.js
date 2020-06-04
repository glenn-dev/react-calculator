import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

const Calculator = () => {
  /* HOOKS */
  const [inputValue, setInputValue] = useState('');
  const [flag, setFlag] = useState(false);

  /* CONST */
  const operators = ['/*-+.', '/*+'];
  
  /* FUNCTIONS */
  const throwAlert = () => alert('Please enter a valid operator.');
  /* Set new element into input value */
  const setValue = (elem) => {
    let newValue = inputValue + elem;
    setInputValue(newValue);
  };

  /* Evaluate and set input elements */
  const inputElement = (elem) => {
    if (inputValue.length > 18) {
      alert(`The value is too large, but here's the result so far: ${eval(inputValue)}`);
      clearInput();
    } else if (inputValue === '') {
      !operators[1].includes(elem) ? setInputValue(elem) : throwAlert();
    } else if (flag) {
      setValue(elem);
      setFlag(false);
    } else {
      (!operators[0].includes(inputValue.substr(-1)) || !isNaN(elem)) ? setValue(elem) : throwAlert();
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
      (!isNaN(keyValue) || operators[0].includes(keyValue)) ? inputElement(keyValue) : throwAlert();
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
    setInputValue('');
  };

  /* MAGIC */
  return (
    <Container className="mt-5">
      <Row>
        <div className="calculator text-center">
          <div className="row m-0 w-100">
            <input 
              className="mb-2 w-100 d-block bg-dark text-white input" 
              type="text" 
              placeholder={'0'}
              onKeyDown={(e) => keyDown(e)}
              onChange={() => console.log(inputValue)}
              value={inputValue}>
            </input>
          </div>

          <div className="row m-0">

            <div className="col-8 p-0">
              <div className="row m-0 m-0">
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" onClick={() => inputElement('+')}>+</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" onClick={() => inputElement('-')}>-</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" onClick={() => inputElement('*')}>x</button>
                </div>
              </div>

              <div className="row m-0">
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" onClick={() => inputElement('7')}>7</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" onClick={() => inputElement('8')}>8</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" onClick={() => inputElement('9')}>9</button>
                </div>      
              </div>

              <div className="row m-0">
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" onClick={() => inputElement('4')}>4</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" onClick={() => inputElement('5')}>5</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" onClick={() => inputElement('6')}>6</button>
                </div>
              </div>

              <div className="row m-0">
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" onClick={() => inputElement('1')}>1</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" onClick={() => inputElement('2')}>2</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" onClick={() => inputElement('3')}>3</button>
                </div>
              </div>

              <div className="row m-0">
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" onClick={() => inputElement('0')}>0</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" onClick={() => inputElement('.')}>.</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button ac-button" onClick={(inputValue) => clearInput(inputValue)}>AC</button>
                </div>
              </div>
            </div>

            <div className="col-2 p-0">
              <div className="my-2 mx-3 p-0">
                  <button className="button" onClick={() => inputElement('/')}>/</button>
              </div>
              <div className="my-3 my-2 mx-3 p-0">
                <button className="button equal-button" onClick={() => resolveInput(inputValue)}>=</button>
              </div>
            </div>

          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Calculator;