import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const {loginUser, googleSignIn} = useContext(AuthContext) ;

  const navigate = useNavigate();
  const location = useLocation();

  // login with form
  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget) ;
    const email = form.get('email') ;
    const password = form.get('password') ;
    console.log( email, password );

    loginUser(email, password)
    .then( res => {  console.log(res.user) })
    navigate(location?.state ? location.state : '/')
    .catch (error => { console.log( error ) })
  }


  // login with google
  const handleGoogleLogin = () => {
    googleSignIn()
    .then((result) => {
      const user = result.user;
      console.log(user);
      navigate(location?.state ? location.state : '/')
  }).catch((error) => {
      console.log('error' , error.message);
  });
  }

  return (
    <div className="container">
      <Header />
      <h1> Login Please </h1>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Give your Email" name="email" /> <br />
        <input type="password" placeholder="Password"  name="password"/> <br />
        <button> Login </button>
      </form>

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
