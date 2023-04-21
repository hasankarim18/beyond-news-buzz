import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from '../QZone/QZone';
import bg from "../../../assets/bg.png";

const RightNavigation = () => {
    return (
      <div>
        <h2>Login With</h2>
        <div>
          <Button className="mb-3" variant="outline-primary">
            <FaGoogle /> Login With Google
          </Button>
          <Button variant="outline-secondary">
            <FaGithub /> Login With Github
          </Button>
        </div>
        <div>
          <h2>Find Us On:</h2>
          <ListGroup>
            <ListGroup.Item>
                <FaFacebook /> FAcebook 
            </ListGroup.Item>
            <ListGroup.Item>
                <FaTwitter /> Twitter 
            </ListGroup.Item>
            <ListGroup.Item>
                <FaInstagram /> Instagram
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div>
            <QZone />
        </div>
        <div className="pt-3">
            <img className="img-fluid" src={bg} alt="" />
        </div>
      </div>
    );
};

export default RightNavigation;