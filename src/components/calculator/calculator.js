import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

const Calculator = () => {
  /* HOOKS */
  const [inputValue, setInputValue] = useState('');
  const [flag, setFlag] = useState(false);

  /* CONST */
  const operators = '/*-+';

  /* FUNCTIONS */

  /* Set new element into input value */
  const setValue = (elem) => {
    let newValue = inputValue + elem;
    setInputValue(newValue);
  }

  /* Evaluate input element */
  const inputElement = (elem) => {
    if (flag && operators.includes(elem)) {
      setValue(elem);
      setFlag(false)
    } else if (flag) {
      setInputValue(elem);
      console.log(inputValue);
      setFlag(false)
    } else {
      if (operators.includes(elem)) {
        if (!operators.includes(inputValue.substr(-1))) {
          setValue(elem);
        }
      } else {
        setValue(elem);
      }
    }
  };

/*   switch (elem){
    case flag:
      operators.includes(elem) ? setValue(elem) : setInputValue(elem);
  } */

  const inputOnChange = (elem) => {
    console.log(elem.target.value);
    // let newValue = inputValue + elem;
    // setInputValue(newValue);
  };

  const resolveInput = (inputValue) => {
    console.log(`resolving: ${inputValue}`);
    setInputValue(eval(inputValue));
    setFlag(true)
  };

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
              onChange={(e) => inputOnChange(e)}
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