import React from 'react';
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div>
        <Container>
          <div className="text-center">
            <h1 className="font_lobster text-center ">
              <Link className="text-decoration-none text-dark" to="/"> Beyond New Buzz</Link>
            </h1>
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D,  YYYY")}</p>
          </div>
          <div
            style={{ background: "#F3F3F3" }}
            className="d-flex mt-3 mb-3 p-2"
          >
            <Button variant="danger">Danger</Button>
            <Marquee className="text-danger" speed={50}>
              I can be a React component, multiple React components, or just
              some text.
            </Marquee>
          </div>
          <div className="mt-3 mb-3">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
              <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mx-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    <Nav.Link href="#pricing">Career</Nav.Link>
                  </Nav>
                  <Nav className="d-flex align-items-center">
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                      <Button variant="secondary">Secondary</Button>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </Container>
      </div>
    );
};

export default Header;