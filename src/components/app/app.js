import React from "react";

/* COMPONENTS */
import Calculator from "./../calculator/calculator";
import Footer from "./../shared/footer/footer";
import Navbar from "./../shared/navbar/navbar";

/* BOOTSTRAP */
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Row className="mt-5">
          <div className="col-12">
            <Calculator initialValue="0" />
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
