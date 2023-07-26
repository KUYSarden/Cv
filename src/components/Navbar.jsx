import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';  

const Navbars = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          
           
          </Nav>
          <Nav>
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#Project">Projects</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navbars