import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css'

function BrandExample() {
  return (
    <>
       <Navbar bg="light" variant="light" sticky='top'>
        <Container>
        
          <Navbar.Brand href="#home">Acceuil</Navbar.Brand>
          <Navbar.Brand href="#right">Reserver</Navbar.Brand>
          <Navbar.Brand href="#home">Apropos</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
          <img src='./logo2.png' width='200px' height='70px' alt='introuvable'/>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;