import Card from "react-bootstrap/Card";
import "./App.css";
import Pagination from 'react-bootstrap/Pagination';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import react from "react";
import Dropdown from "react-bootstrap/Dropdown";

import CardGroup from "react-bootstrap/CardGroup";


import { Offcanvas } from "bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
export function App() {
  return (
    <div className="App">
      <OffCanvas />
    </div>
  );
}

export function OffCanvas() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>

      <Dropdown className="dropdown-person">
        <i class="bi bi-person-fill"></i>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          <i />

          <Dropdown.Menu variant="dark">
            <Dropdown.Item href="#/action-1" active>
              Settings
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">Activity Log</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Toggle>
      </Dropdown>

      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <i class="bi bi-search" variant="primary"></i>
      </Form>
      <div className="card-group">
        {["Primary", "Warning", "Success", "Danger"].map((variant) => (
          <Card
            className="card-variants"
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
          >
          
            <Card.Body>
              <Card.Title>{variant} </Card.Title>
              <Card color="black" />
              <Card.Text>
                <Card.Link className="card-link" href="#" color="white">
                  View Details
                </Card.Link>
                <i class="bi bi-caret-right"></i>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

 

      <Card className="card-style" style={{ width: "50%" }}>
      <Card.Img
            class="img-responsive"
            src={require(".//images/bar-chart.png")}
            alt="barchart"
          />
        <Card.Body>
          <Card.Title>Bar Chart Example</Card.Title>
         
        </Card.Body>
        
      </Card>

      <Card className="area-chart" style={{ width: "50%" }}>
      <Card.Img
            class="area-chart"
            src={require(".//images/area chart example.png")}
            alt="area-chart"
          />
        <Card.Body>
          <Card.Title>Area Chart Example</Card.Title>
         
        </Card.Body>
      </Card>
  
  

    </>
  );
}

export default App;
