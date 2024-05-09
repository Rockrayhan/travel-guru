import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import { AuthContext } from "../provider/AuthProvider";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    try {
      await loginUser(email, password);
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
    <div className="container">
      <Header />

      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <div className="border border-3 p-5 rounded-3 shadow-lg w-50">
          <h1 className="text-center mb-5"> Login Please </h1>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" />
            </Form.Group>

            <Button variant="warning" type="submit" className="w-100">
              Login
            </Button>
          </Form>

          {error && <p style={{ color: "red", textAlign: "center", marginTop: "1rem" }}>{error}</p>}
          <div className="text-center my-3">
            <Link to="/register"> New User ? Please Register </Link>
          </div>
          <div className="text-center mb-3">
            <hr />
            <span className="mx-2">OR</span>
            <hr />
          </div>
          <div className="d-flex justify-content-center">
            <Button onClick={handleGoogleLogin} variant="dark" className="me-3">
             <span> Continue With Google</span> <span><img className="google-logo ms-2" src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png" alt="" /></span>
            </Button>
            <Button variant="dark"> Continue With Facebook </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
