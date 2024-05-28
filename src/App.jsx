import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Asidebar from "./Components/Asidebar";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Pages/Dashboard";
import Post_api from "./Components/Pages/Post_api";
// import Delete from "./Components/Pages/Delete";

const App = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={2} className="vh-100  bg_grey overflow-y-auto px-0 ">
            <Asidebar />
          </Col>
          <Col xs={10} className="  px-0">
            <Navbar />
            <Outlet />
          </Col>
        </Row>
      </Container>
      {/* <Post_api /> */}
    </div>
  );
};

export default App;
