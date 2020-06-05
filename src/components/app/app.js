import React from 'react';
import Calculator from './../calculator/calculator';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const App = () => {
  return (
    <Container>
      <Row className='mt-5'>
        <div className='col-12'>
          <Calculator />
        </div>
      </Row>
    </Container>
  );
};

export default App;