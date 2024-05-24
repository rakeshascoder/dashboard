import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Asidebar from "./Components/Asidebar";
import Navbar from "./Components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div>
      <Container fluid className="">
        <Row>
          <Col xs={2} className="vh-100  bg_grey overflow-y-auto px-0 ">
            <Asidebar />
          </Col>
          <Col xs={10} className="vh-100  px-0 overflow-y-auto">
            <Navbar />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
