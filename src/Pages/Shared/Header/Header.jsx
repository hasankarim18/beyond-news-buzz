import React, { useContext } from 'react';
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';
import NavigationBar from '../NavigationBar/NavigationBar';

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
          
        </Container>
      </div>
    );
};

export default Header;