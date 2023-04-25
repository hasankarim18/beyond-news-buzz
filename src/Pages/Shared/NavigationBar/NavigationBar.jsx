import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationBar = () => {
    const {user} = useContext(AuthContext)
    return (
      <Container className="mb-3">
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
                  <Link
                    to="/logout"
                    className="btn btn-danger"
                    variant="secondary"
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="btn btn-success"
                    variant="secondary"
                  >
                    Login
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    );
};

export default NavigationBar;