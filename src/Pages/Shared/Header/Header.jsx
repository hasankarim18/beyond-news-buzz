import React, { useContext } from 'react';
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

  const {user} = useContext(AuthContext)


    return (
      <div>
        <Container>
          <div className="text-center">
            <h1 className="font_lobster text-center ">
              <Link className="text-decoration-none text-dark" to="/">
                {" "}
                Beyond New Buzz
              </Link>
            </h1>
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D,  YYYY")}</p>
          </div>
          <div
            style={{ background: "#F3F3F3" }}
            className="d-flex mt-3 mb-3 p-2"
          >
            <Button variant="danger">Breaking</Button>
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
                    <NavLink className="nav-link" to="/">
                      {" "}
                      Home
                    </NavLink>

                    <NavLink className="nav-link" to="/about">
                      About{" "}
                    </NavLink>

                    <Nav.Link href="#pricing">Career</Nav.Link>

                    <NavLink className="nav-link" to="/add-category">
                      Add Category
                    </NavLink>
                  </Nav>
                  <Nav className="d-flex align-items-center">
                    {user && (
                      <Nav.Link href="#deets">
                        {" "}
                        <FaUserCircle />{" "}
                        <span className="text-success fw-bold">
                          {user?.displayName}{" "}
                        </span>{" "}
                      </Nav.Link>
                    )}
                    {user ? (
                      <Link to="/logout" className="btn btn-danger" variant="secondary">
                        Logout
                      </Link>
                    ) : (
                      <Link to="/login" className="btn btn-success" variant="secondary">
                        Login
                      </Link>
                    )}
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