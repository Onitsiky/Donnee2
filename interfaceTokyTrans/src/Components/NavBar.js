import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'

function BrandExample() {
  return (
    <>
       <Navbar bg="dark" variant="dark">
        <Container>
        <img src='./logo1.png' width='200px'/>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
            <Nav.Link href="#features">Réserver</Nav.Link>
            <Nav.Link href="#pricing">Apropos</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;