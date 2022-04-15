import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo2 from '../../img/logos/logo2.png';
import './Header.css';
const Header = () => {

    return (
        <header>
            <Navbar fixed='top' expand="lg" className='py-3'>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo2} alt="red onion foods" width='150px' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center text-right">
                        <Nav.Link href="/cart">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href='/sign-up'>
                            <Button>Sign Up</Button>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;