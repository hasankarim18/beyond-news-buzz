import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationBar = () => {
    const {user, logout, setUser} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = ()=> {
      logout()
      .then(() => {
      //  console.log('sign out successfulk ')
        setUser(null)
        navigate('/')
      })
      .catch(error => {
        console.log('sign out failed;', error);
      })
    }
    return (
      <Container className="mb-3">
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <NavLink className="nav-link" to="/category/0">
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
                  <button
                    onClick={handleLogout}
                    to="/logout"
                    className="btn btn-danger"
                    variant="secondary"
                  >
                    Logout
                  </button>
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