import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext) ;

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget) ;

        
        const displayName = form.get('displayName')
        const email = form.get('email')
        const password = form.get('password')
        console.log(displayName , email, password);

        // create user
        createUser(email, password, displayName)
        .then(res => {
            console.log(res.user);
        })
        .catch(error => {
            console.log(error) ;
        })
    }
    return (
        <div>
            <Header/>
            
        
            <div className='container'>
           <h1>  Please  Register</h1> 

           <form onSubmit={handleRegister}>
            <input type="text" placeholder='Give your Name' name='displayName'/> <br />
            <input type="email" placeholder='Give your Email' name='email' /> <br />
            <input type="password" placeholder='Password' name='password' /> <br />
            
            <button className='btn btn-success'> Register </button>
           </form>

           <Link to='/login'> Already Registered ? Please login </Link>

           <div className="d-flex align-items-center w-25">
        <hr className="flex-grow-1" />
        <span className="mx-2">OR</span>
        <hr className="flex-grow-1" />
      </div>

    <button> Continue With Google </button> <br />
    <button> Continue With Facebook </button>
        </div>
        </div>
    );
};

export default Register;