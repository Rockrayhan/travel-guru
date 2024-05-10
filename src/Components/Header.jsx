import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import logo from "../../public/images/logo.png";

const Header = () => {
    const {user, logOut} = useContext(AuthContext) ;

    const location = useLocation();
    const isDarkBackground = location.pathname === '/' || location.pathname.startsWith('/booking/') ;

    const headerStyle = {
        color: isDarkBackground ? 'white' : 'black'
    };

    return (
        <>
            <Navbar expand="lg" className="bg-transparent header container ">
                <Container className='row'>
                    <Navbar.Brand className='col-lg-6'> <img className='brand-img' src={logo} alt="" /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white w-25' />
                    <Navbar.Collapse className='col-lg-6 right-nav' id="basic-navbar-nav">
                        <Nav className="d-flex gap-4 ">
                            <Link style={headerStyle} to="/">Home</Link>
                            <Link style={headerStyle} to="/">Search</Link>
                            <Link style={headerStyle} to="/">Destination</Link>
                        </Nav>
               <div className='mx-4'>
               {
                   user ?   
                
                   
                   <div className='d-flex gap-3'>
                <span className={`${isDarkBackground ? 'text-white' : 'text-black'} mt-2`}> {user.displayName} </span>
                <button onClick={logOut} className={`btn btn-danger w-50 ${isDarkBackground ? 'text-white' : 'text-black'}`}>
                 Sign out 
            </button>  
                <span><img className='img-fluid user-img' src={user.photoURL} alt="" /></span>
            </div>
            :     
            <button className={`btn btn-warning ${isDarkBackground ? 'text-white' : 'text-black'}`}>
                        <Link style={headerStyle} to='/login'> Login </Link>
            </button>
               }
               </div>
               </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
