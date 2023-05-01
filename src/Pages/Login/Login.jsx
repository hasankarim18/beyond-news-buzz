import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const {signInUser, setUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location?.state?.from?.pathname || "/category/0";

   

  const loginHandler = (event)=> {
    event.preventDefault()
      const form = event.target;
     const email = form.email.value;
     const password = form.password.value; 
     console.log('login');
     signInUser(email, password)
     .then(res => {
      const loggedInUser = res.user 
      navigate(from)
      
     })
     .catch(error => {
      console.log(error);
     })

  }

    return (
      <Container>
        <div className="row">
          <div className="col-11 mx-auto col-sm-9  col-md-7 col-lg-6">
            <h4>Please Login.</h4>
            <Form onSubmit={loginHandler} className="border rounded-4 p-4">
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
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group> */}
              <div className="mb-3">
                <input
                  value="Login"
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
                Don't have account?
                <Link to="/register"> Register </Link>
              </span>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default Login;