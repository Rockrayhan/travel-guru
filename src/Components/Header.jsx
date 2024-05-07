import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext) ;

    const location = useLocation();
    const isDarkBackground = location.pathname === '/' || location.pathname.startsWith('/booking/') || location.pathname.startsWith('/details/')  ;

    const headerStyle = {
        color: isDarkBackground ? 'white' : 'black'
    };

    return (
        <>
            <Navbar expand="lg" className="bg-transparent header">
                <Container>
                    <Navbar.Brand style={headerStyle} href="#home">Travel GURU</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="d-flex gap-4">
                            <Link style={headerStyle} to="/">Home</Link>
                            <Link style={headerStyle} to="/">Search</Link>
                            <Link style={headerStyle} to="/">Destination</Link>
                        </Nav>
                    </Navbar.Collapse>
               {
                user ?   
                
                
            <div>
                <span className={`${isDarkBackground ? 'text-white' : 'text-black'}`}> {user.displayName} </span>
                <button onClick={logOut} className={`btn btn-danger ${isDarkBackground ? 'text-white' : 'text-black'}`}>
                 Sign out 
            </button>  
                <span><img className='img-fluid user-img' src={user.photoURL} alt="" /></span>
            </div>
            :     
             <button className={`btn btn-warning ${isDarkBackground ? 'text-white' : 'text-black'}`}>
                        <Link style={headerStyle} to='/login'> Login </Link>
            </button>
               }
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
