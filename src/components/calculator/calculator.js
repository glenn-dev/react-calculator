import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

const Calculator = () => {
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
                  <button>+</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button>-</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button>x</button>
                </div>
              </div>

              <div className="row m-0">
                <div className="col-2 my-2 mx-3 p-0">
                  <button>7</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button>8</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button>9</button>
                </div>      
              </div>

              <div className="row m-0">
                <div className="col-2 my-2 mx-3 p-0">
                  <button>4</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button>5</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button>6</button>
                </div>
              </div>

              <div className="row m-0">
                <div className="col-2 my-2 mx-3 p-0">
                  <button>1</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button>2</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button>3</button>
                </div>
              </div>

              <div className="row m-0">
                <div className="col-2 my-2 mx-3 p-0">
                  <button>0</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button>.</button>
                </div>
                <div className="col-2 my-2 mx-3 p-0">
                  <button>AC</button>
                </div>
              </div>
            </div>

            <div className="col-2 p-0">
              <div className="my-2 mx-3 p-0">
                  <button>/</button>
              </div>
              <div className="my-3 my-2 mx-3 p-0">
                <button className="button equal">=</button>
              </div>
            </div>
            
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default Calculator;