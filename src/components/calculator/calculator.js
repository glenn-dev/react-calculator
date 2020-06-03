import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

const Calculator = () => {
  const inputElement = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }

  const resolveInput = () => {
    console.log('resolving...')
  }

  const clearInput = () => {
    console.log('clearing input...')
  }
  return (
    <Container className="mt-5">
      <Row>
        <div className="calculator text-center">

          <div className=" row m-0 w-100">
            <input className="mb-2 w-100 d-block bg-dark text-white input" type="text"></input>
          </div>

          <div className="row m-0">

            <div className="col-8 p-0">
              <div className="row m-0 m-0">
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" value={'+'} onClick={inputElement}>+</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" value={'-'} onClick={inputElement}>-</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" value={'*'} onClick={inputElement}>x</button>
                </div>
              </div>

              <div className="row m-0">
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" value={'7'} onClick={inputElement}>7</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" value={'8'} onClick={inputElement}>8</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" value={'9'} onClick={inputElement}>9</button>
                </div>      
              </div>

              <div className="row m-0">
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" value={'4'} onClick={inputElement}>4</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" value={'5'} onClick={inputElement}>5</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" value={'6'} onClick={inputElement}>6</button>
                </div>
              </div>

              <div className="row m-0">
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" value={'1'} onClick={inputElement}>1</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" value={'2'} onClick={inputElement}>2</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" value={'3'} onClick={inputElement}>3</button>
                </div>
              </div>

              <div className="row m-0">
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" value={'0'} onClick={inputElement}>0</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button" value={'.'} onClick={inputElement}>.</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button className="button ac-button" value={'ac'} onClick={clearInput}>AC</button>
                </div>
              </div>
            </div>

            <div className="col-2 p-0">
              <div className="my-2 mx-3 p-0">
                  <button className="button" value={'/'} onClick={inputElement}>/</button>
              </div>
              <div className="my-3 my-2 mx-3 p-0">
                <button className="button equal-button" onClick={resolveInput}>=</button>
              </div>
            </div>

          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Calculator;