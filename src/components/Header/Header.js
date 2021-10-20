import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Header = () => {
    const { user, logOut } = UseAuth()
    return (
        <>
            <Navbar bg="warning" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src="/logo.jpg" alt="" width="50px" />    <span className="text-dark fw-bolder">Royel Diagnostic</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/equipment"> Equipment</Nav.Link>
                        <Nav.Link as={Link} to="/about"> About</Nav.Link>
                         
                        {
                            user.photoURL ? <div><img src={user.photoURL} className="rounded-circle" width="50px" alt="" /></div> : <div></div> 
                        }
                        {
                             user.email ? <div><span className="text-peimary fw-bolder p-1 d-name">{user.displayName}</span><Button onClick={logOut}variant="outline-primary" className=" m-3 px-3   rounded-pill">Log Out </Button></div> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                         }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;