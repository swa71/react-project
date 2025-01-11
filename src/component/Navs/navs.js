import React from "react";
import "./nav.css"
import { Navbar,Container,Nav} from "react-bootstrap";
import logo1 from "./../../assest/logo1.jpg"

function Navs() {
    return (
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src={logo1} title="logo"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About us</Nav.Link>
                <Nav.Link href="#home">explore services</Nav.Link>
                <Nav.Link href="#link">Review</Nav.Link>
                <Nav.Link href="#link">FaQ</Nav.Link>
              </Nav>
              <Nav>
            <Nav.Link id="lastname" >0659095592</Nav.Link>
          </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  

export default Navs;