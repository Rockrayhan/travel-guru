import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import { AuthContext } from "../provider/AuthProvider";
import { Form, Button } from "react-bootstrap";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const displayName = form.get("displayName");
    const photoURL = form.get("photoURL");
    const email = form.get("email");
    const password = form.get("password");

    try {
      await createUser(email, password, displayName, photoURL);
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleSignIn();
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div>
      <Header />

      <div className="container">
        <h1 className="text-center my-5">Please Register</h1>

        <div className="border border-3 p-5 rounded-3 shadow-lg w-50 mx-auto mb-2">
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicDisplayName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                name="displayName"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhotoURL">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter photo URL"
                name="photoURL"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
              />
            </Form.Group>

            <Button variant="success" type="submit" className="w-100">
              Register
            </Button>
          </Form>

          {error && (
            <p style={{ color: "red", textAlign: "center", marginTop: "1rem" }}>
              {error}
            </p>
          )}
          <div className="text-center my-3">
            <Link to="/login">Already Registered? Please Login</Link>
          </div>
          <div className="text-center mb-3">
            <hr />
            <span className="mx-2">OR</span>
            <hr />
          </div>
          <div className="d-flex justify-content-center">
            <Button onClick={handleGoogleLogin} variant="dark" className="me-3">
              <span> Continue With Google</span>{" "}
              <span>
                <img
                  className="google-logo ms-2"
                  src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png"
                  alt=""
                />
              </span>
            </Button>
            <Button variant="dark"> Continue With Facebook </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
