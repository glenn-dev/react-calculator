import React from 'react';
import Calculator from './../calculator/calculator';
import Footer from './../shared/footer/footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const App = () => {
  return (
    <div>
      <Container>
        <Row className='mt-5'>
          <div className='col-12'>
            <Calculator initialValue="0" />
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;