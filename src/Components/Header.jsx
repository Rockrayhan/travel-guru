import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
           <Navbar expand="lg" className="bg-transparent">
      <Container className=''>
        <Navbar.Brand className='text-white' href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex gap-4 text-white ">
            <Link className='text-decoration-none text-white' to="/">Home</Link>
            <Link className='text-decoration-none text-white' to="/">Search</Link>
            <Link className='text-decoration-none text-white' to="/">Destination</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
};

export default Header;
