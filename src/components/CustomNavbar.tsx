import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CustomNavbar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand as={Link} to="/">
      <img
        src="https://assets-global.website-files.com/641ca25127132504fed6518b/64276a6769d01c0074feb8e9_SpaceNews-logo-black.jpeg" 
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="Spaceflight News logo"
      />
      {' Spaceflight News'}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto ">
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
        <Nav.Link as={Link} to="/register">Register</Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default CustomNavbar;
