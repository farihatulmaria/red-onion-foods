import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase';
import logo2 from '../../img/logos/logo2.png';
import userImg from '../../img/userImg.png';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);
    const mainMenuItems = <>
        <NavLink><Link to={'/'}>Home</Link></NavLink>
        <NavLink><Link to={'/about'}>About</Link></NavLink>
        <NavDropdown title="Menu">
            <NavDropdown.Item><Link to={"/fast-food-Menu"}>Fast Food Menu</Link></NavDropdown.Item>
            <NavDropdown.Item><Link to={"/restaurant-food-Menu"}>Restaurant Food Menu</Link></NavDropdown.Item>
        </NavDropdown>
    </>
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
                            {mainMenuItems}
                            {
                                user 
                                ? 
                                <>
                                <NavLink href='/profile'>
                                    <img src={user?.photoURL? user?.photoURL : userImg} alt="" width='50px'/>
                                </NavLink>
                                <NavLink href="/cart">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </NavLink>
                                <NavLink>
                                    <Button onClick={()=>signOut(auth)}>Sign Out</Button>
                                </NavLink>
                                </>
                                :
                                <>
                                    <NavLink href='/login'>
                                        <Button>Login</Button>
                                    </NavLink>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;