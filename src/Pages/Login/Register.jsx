import React, { useContext } from 'react';
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {

  const { createUser } = useContext(AuthContext);

  const submitHandler = (event)=> {
    event.preventDefault()
    const form = event.target
    const name = form.name.value 
    const email = form.email.value
    const password = form.password.value 
    const photo = form.photo.value

    console.log(name, email, password, photo);
  }

    return (
      <Container>
        <div className="row">
          <div className="col-11 mx-auto col-sm-9  col-md-7 col-lg-6">
            <h4>Please Register.</h4>
            <Form onSubmit={submitHandler} className="border rounded-4 p-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phonto url</Form.Label>
                <Form.Control
                  name="photo"
                  type="text"
                  placeholder="Enter Phone Url"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  name="confirm"
                  type="password"
                  placeholder="Confirm Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  name="accept"
                  type="checkbox"
                  label="Accept terms and condition"
                />
              </Form.Group>
              <div className="mb-3">
                <input
                  value="Sign Up"
                  type="submit"
                  className="btn btn-success"
                />
              </div>
              <div>
                <Form.Text className="text-danger">
                  show if error happen.
                </Form.Text>
                <Form.Text className="text-success">Success messge</Form.Text>
              </div>
            </Form>
            <div className="mt-3 text-capitalize ">
              <span>
                already have an account?
                <Link to="/register"> Login </Link>
              </span>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default Register;