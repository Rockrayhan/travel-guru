import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import { AuthContext } from "../provider/AuthProvider";

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
      <h1> Login Please </h1>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Give your Email" name="email" />{" "}
        <br />
        <input type="password" placeholder="Password" name="password" />{" "}
        <br />
        <button> Login </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <Link to="/register"> New User ? Please Register </Link>
      <div className="d-flex align-items-center w-25">
        <hr className="flex-grow-1" />
        <span className="mx-2">OR</span>
        <hr className="flex-grow-1" />
      </div>

      <button onClick={handleGoogleLogin}> Continue With Google </button> <br />
      <button> Continue With Facebook </button>
    </div>
  );
};

export default Login;
