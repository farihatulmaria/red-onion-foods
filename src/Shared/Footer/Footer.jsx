import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../img/logos/logo.png';
import './Footer.css';
const Footer = () => {
    const dynamicDate = () =>{
        const currentDate = new Date();
        const displayYear = currentDate.getFullYear();
        return displayYear;
    }
    return (
        <footer className='bg-dark py-5'>
            <Container>
                <Row>
                    <Col>
                        <img src={logo} alt=""  width='150px' />
                    </Col>
                    <Col className='quick-links text-white'>
                        <Row>
                            <Col>
                                <ul>
                                    <li>About Online Foods</li>
                                    <li>Read Our Blogs</li>
                                    <li>Sign Up to deliver</li>
                                    <li>Add your restaurant</li> 
                                </ul>
                            </Col>
                            <Col>
                                <ul>
                                    <li>Get help</li>
                                    <li>Read FAQs</li>
                                    <li>View all cities</li>
                                    <li>Restaurant near me</li> 
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className='my-5 align-items-center'>
                    <Col>
                        <div className="copy-right">
                            <p className='text-light mb-0'>CopyRight © {dynamicDate()} Red Onion Foods</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="terms-list text-end">
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                            <li>Pricing</li>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;