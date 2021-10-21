import React from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

import { useCartContext } from './cartContext';





export const NavBar = ()=>{
    const {CarWidget} =useCartContext()
    return<>

    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Salva Tienda</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="#/">Home</Nav.Link>
        <link to= '/remeras'>
        <Nav.Link href="#link">Remeras</Nav.Link>
        </link>
        <link to='/tejidos'>
        <Nav.Link href="#link">Tejidos</Nav.Link>
        </link>
        <link to='/pantalones'>
        <Nav.Link href="#link">Pantalones</Nav.Link>
        </link>
    
        <link to='/cart'>
            {CarWidget()}
            Cart
        </link>

        </Nav>
        </Container>
  </Navbar>
    </>   
}





